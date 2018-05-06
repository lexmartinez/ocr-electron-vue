<template>
  <v-app id="inspire" dark>
    <v-toolbar app fixed clipped-left style="padding-top: 20px">
      <v-toolbar-title>Simple OCR</v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="isSuccess || isFailed">
      <v-btn icon @click="reset">
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-btn icon @click="save">
        <v-icon>save</v-icon>
      </v-btn>
      <v-btn icon @click="drive">
        <v-icon>file_upload</v-icon>
      </v-btn></span>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <div class="container" v-if="isInitial">
            <form enctype="multipart/form-data" novalidate>
              <h1>Upload image</h1>
              <div class="dropbox">
                <input type="file" :name="'document'" :disabled="isSaving" @change="filesChange($event.target.files);" accept="image/*" class="input-file">
                <p v-if="isInitial">
                  Drag your file here to begin<br> or click to browse
                </p>
              </div>
            </form>
          </div>
          <div class="container text-xs-center" v-if="isSaving">
            <v-progress-circular v-bind:size="200" v-bind:width="15" v-bind:rotate="-90"
              v-bind:value="(status.progress * 100)" color="primary">
                  {{progress}} %
            </v-progress-circular>
            <h2>{{status.status}}</h2>
          </div>
            <v-layout row wrap v-if="isSuccess || isFailed">
            <v-flex xs12>
              <v-divider></v-divider>
              <v-text-field label="Result" v-model="status.text" counter full-width multi-line single-line :auto-grow="true"></v-text-field>
            </v-flex>
            </v-layout>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>v1.0.0 &copy; 2018 - Lex Martinez &lt;@lexmartinez&gt;</span>
    </v-footer>
  </v-app>
</template>

<script>
import Tesseract from 'tesseract.js'

const STATUS_INITIAL = 0
const STATUS_SAVING = 1
const STATUS_SUCCESS = 2
const STATUS_FAILED = 3

export default {
  name: 'ocr',
  resource: 'OCR',
  data () {
    return {
      currentStatus: null,
      status: {},
      drawer: null
    }
  },
  computed: {
    isInitial () {
      return this.currentStatus === STATUS_INITIAL
    },
    isSaving () {
      return this.currentStatus === STATUS_SAVING
    },
    isSuccess () {
      return this.currentStatus === STATUS_SUCCESS
    },
    isFailed () {
      return this.currentStatus === STATUS_FAILED
    },
    progress () {
      return Math.floor(this.status.progress * 100)
    }
  },
  methods: {
    ocr: function (event) {
      Tesseract.recognize(event.path)
        .progress((status) => {
          this.status = status
        })
        .then((result) => {
          this.currentStatus = STATUS_SUCCESS
          this.status = result
        }).catch((error) => {
          this.currentStatus = STATUS_FAILED
          this.status = error
        })
    },
    reset () {
      this.currentStatus = STATUS_INITIAL
      this.status = {}
    },
    save () {

    },
    drive () {

    },
    filesChange (fileList) {
      if (!fileList.length) return
      this.currentStatus = STATUS_SAVING
      this.ocr(fileList[0])
    }
  },
  mounted () {
    this.reset()
  }
}
</script>

<style>
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: transparent;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: rgba(255,255,255,0.1); /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>

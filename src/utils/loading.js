import {
  ElLoading
} from 'element-plus'
const loading = {
  loadingInstance: null,
  open() {
    if (this.loadingInstance === null) {
      this.loadingInstance = ElLoading.service({
        target: 'body',
        fullscreen: false,
        background: 'rgba(0,0,0,0.4)'
      })
    }
  },
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}
export default loading

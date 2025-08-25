import './ModalPortal.css'
import Nullstack from 'nullstack'

class ModalPortal extends Nullstack {

  currentId = null
  contents = {}

  open({ id }) {
    this.currentId = id
  }

  close() {
    this.currentId = null
  }

  render() {
    if (!this.currentId) return false
    return (
      <div id="modal">
        <div>{this.contents[this.currentId]}</div>
        <button onclick={this.close}>X</button>
      </div>
    )
  }

}

export default ModalPortal

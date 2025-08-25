import './ModalPortal.css'
import Nullstack from 'nullstack'

class ModalPortal extends Nullstack {

  visible = false

  open({ content }) {
    if (content) {
      this.content = content
    }
    this.visible = true
  }

  close() {
    this.visible = false
  }

  render() {
    if (!this.visible) return false
    return (
      <div id="modal">
        <div>{this.content}</div>
        <button onclick={this.close}>X</button>
      </div>
    )
  }

}

export default ModalPortal

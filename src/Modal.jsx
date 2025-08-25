import Nullstack from 'nullstack'

class Modal extends Nullstack {

  update({ instances, children }) {
    instances.modal.content = children
  }

}

export default Modal

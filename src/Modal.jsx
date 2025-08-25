import Nullstack from 'nullstack'

class Modal extends Nullstack {

  update({ instances, children, id }) {
    instances.modal.contents[id] = children
  }

  terminate({ instances, id }) {
    delete instances.modal.contents[id]
  }

}

export default Modal

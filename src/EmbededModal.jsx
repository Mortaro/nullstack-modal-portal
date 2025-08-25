import Nullstack from 'nullstack'

import Modal from './Modal'

class EmbededModalExample extends Nullstack {

  render({ instances }) {
    return (
      <section>
        <Modal> Hello </Modal>
        <button onclick={instances.modal.open}> open modal </button>
      </section>
    )
  }

}

export default EmbededModalExample

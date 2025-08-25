import Nullstack from 'nullstack'

import Modal from './Modal'

class Page extends Nullstack {

  openModal( { instances }) {
    instances.modal.open({ id: 'example' })
  }

  render() {
    return (
      <section>
        <Modal id="example"> Example Modal </Modal>
        <button onclick={this.openModal}> open modal </button>
      </section>
    )
  }

}

export default Page

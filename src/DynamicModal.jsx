import Nullstack from 'nullstack'

class DynamicModalExample extends Nullstack {

  openModal( { instances }) {
    instances.modal.open({ content: 'Hello' })
  }

  render() {
    return (
      <section>
        <button onclick={this.openModal}> open modal </button>
      </section>
    )
  }

}

export default DynamicModalExample

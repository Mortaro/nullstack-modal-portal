import Nullstack from 'nullstack'

import DynamicModalExample from './DynamicModal'
import EmbededModalExample from './EmbededModal'
import ModalPortal from './ModalPortal'

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'en-US'
  }

  render() {
    return (
      <body>
        <ModalPortal key="modal" />
        <EmbededModalExample route="/embeded" />
        <DynamicModalExample route="/dynamic" />
      </body>
    )
  }

}

export default Application

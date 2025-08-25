import Nullstack from 'nullstack'

import ModalPortal from './ModalPortal'
import Page from './Page'

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'en-US'
  }

  render() {
    return (
      <body>
        <ModalPortal key="modal" />
        <Page route="/" />
      </body>
    )
  }

}

export default Application

import { EventEmitter } from 'events'
import appDispatcher from '../dispatcher'

let _cardId = '0'
let _loginStatus

function _getCardId(cardId) {
  _cardId = cardId
}

function _getLoginStatus(loginStatus) {
  _loginStatus = loginStatus
}

let AppStore = Object.assign({}, EventEmitter.prototype, {
  getCardId() {
    return _cardId
  },

  getLoginStatus() {
    return _loginStatus
  }
})


appDispatcher.register((payload) => {
  switch (payload.actionType) {
    case 'select:bank':
      _getCardId(payload.cardId)
      AppStore.emit('change')
      break
    case 'click:login':
      _getLoginStatus(payload.loginStatus)
      AppStore.emit('change')
      break
  }
})

export default AppStore

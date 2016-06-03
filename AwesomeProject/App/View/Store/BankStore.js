import { EventEmitter } from 'events'
import appDispatcher from '../dispatcher'

let _cardId='0'

function _getCardId(cardId) {
  _cardId = cardId
}

let BankStore = Object.assign({}, EventEmitter.prototype, {
  getCardId() {
    return _cardId
  }
})


appDispatcher.register((payload) => {
  switch (payload.actionType) {
    case 'select:bank':
      _getCardId(payload.cardId)
      BankStore.emit('change')
      break
  }
})

export default BankStore

import { EventEmitter } from 'events'
import appDispatcher from '../dispatcher'
EventEmitter.prototype.setMaxListeners(100)

let _cardId

function _getCardId(cardId) {
  console.log(cardId)
  _cardId = cardId
}

let BankStore = Object.assign({}, EventEmitter.prototype, {
  getCardId() {
    return _cardId
  }
})


appDispatcher.register((payload) => {
  switch (payload.actionType) {
    case 'slect:bank':
      _getCardId(payload.cardId)
      BankStore.emit('change')
      break
  }
})

export default BankStore
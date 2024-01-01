const messages = JSON.parse(require('fs').readFileSync('./chat.json'))
messages.sort((a,b) => a._data.timestamp - b._data.timestamp)

require('fs').writeFileSync('./chat-sorted.json', JSON.stringify(messages))
console.log('Beginning')

const qrcode = require('qrcode-terminal');

const { Client, LocalAuth, LegacySessionAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth({ clientId: 'omkar-jio' })
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', async () => {
    console.log('Client is ready!');

});

client.on('message', async message => {
	console.log(message.body);
    if(message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
        return
	}
    const chat = await message.getChat()
    if(!chat.isGroup) {
        chat.sendMessage(':)')
    }
});

client.initialize();
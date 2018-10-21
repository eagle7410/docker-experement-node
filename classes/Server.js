const path = require('path');
const publicDir = path.join(__dirname, '..','public');
const ServerFrame = require('./ServerFrame');
const reload = require('reload');

class Server extends ServerFrame{
	async up () {
		this._app.get('/ts', (req, res) => {
			// TODO: clear
			console.log('path is ->', publicDir);
			res.sendFile(path.join(publicDir,'index.html'))
		});


		this._app.get('/', (req, res) => {
			res.json({mess : 'Hi Igor asa'});
		});

		await super.up();
		reload(this._app)
	}
}

module.exports = Server;

const http    = require('http');
const express = require('express');

class ServerFrame {
	/**
	 *
	 * @param {number} port
	 * @param {number} version
	 */
	constructor (port, version) {

		this.port        = port;
		this._express    = express;
		/**
		 *
		 * @type {Function}
		 * @protected
		 */
		this._app        = express();
		this._version    = String(version || 1);
		this._server     = http.Server(this._app);
		this._serverName = `ServerFrameV${this._version}`;
	}

	async up () {

		this._server.listen(this.port, async () => {
			const baseLine = `=== ${this._serverName} APP READY IN PORT ${this.port} ===\n`;
			const len = baseLine.length - 1;

			console.log(
				`\n\n ${'='.repeat(len)}\n ${baseLine} ${'='.repeat(len)}\n`,
				`link in browser http://localhost:${this.port}\n\n`,
			);
		});
	}

	down () {
		return new Promise( closed => {
			this._server.close(() => closed());
		});
	}
}

module.exports = ServerFrame;

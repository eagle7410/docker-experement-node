const Cmd = require('./classes/Cmd');

void async function kills() {
	try {
		let out = await Cmd.get(`ps -ef  | grep nodemon`);

		out = out.split('\n').map(
			line => line
				.replace(/(\s+)/g, '##')
			   .split('##')
		);

		for (let line of out) {

			if (
				line.includes('grep') ||
				line.includes('nodemon_kill.js') ||
				!line[1]
			) continue;

			await Cmd.get(`kill ${line[1]}`)
		}

	}finally {
		process.exit();
	}
}();

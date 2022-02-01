import Config from './config'

const Message = new class {
	constructor() {
		this.isDev = Config.isDev
		this.showFunc = true
		this.showWebrtc = false
	}

	get webrtc() {
		if(!this.showWebrtc || this.isDev) {
			return {
				log: () => {},
				info: () => {},
				error: () => {},
				warn: () => {},
			};
		}

		return this;
	}

	divider(n='*', r=30) {
		if(!this.isDev) return ;
		console.warn(n.repeat(r));
	}
	_block(type, ...args) {
		if(!this.isDev) return ;

		const n = '#'
		const pre = [n.repeat(5), ' '.repeat(5)]
		this.divider(n, 100)
		this[type](...pre, ...args, ...pre.reverse());
		this.divider(n, 100)
	}

	block(...args) {
		this._block('warn', ...args)
	}
	blockError(...args) {
		this._block('error', ...args)
	}

	func(...args) {
		if(!this.isDev || !this.showFunc) return ;
		// console.warn('*'.repeat(30));
		// console.warn('func:', ...args)
	}
	log(...args) {
		if(!this.isDev) return ;
		console.log(...args);
	}
	warn(...args) {
		if(!this.isDev) return ;
		console.warn(...args);
	}
	info(...args) {
		if(!this.isDev) return ;
		console.info(...args);
	}
	error(...args) {
		if(!this.isDev) return ;
		console.error(...args);
	}
}

export default Message

'use strict'

class Miniquery {
	constructor(el) {
		this._el = document.querySelectorAll(el);
	}

	hide() {
		this._el.forEach(el => {
			el.style.display = 'none';
		});
		return this;
	}

	show() {
		this._el.forEach(el => {
			el.style.display = 'block';
		});
		return this;
	}

	addClass(className) {
		this._el.forEach(el => {
			el.className += className;
		});
		return this;
	}

	removeClass(className) {
		this._el.forEach(el => {
			el.className += className;
		});
		return this;
	}

	on(eventName, cb) {
		let event = new Event(eventName);

		this._el.forEach(el => {
			el.addEventListener(eventName, cb);
			el.dispatchEvent(event);
		});

		return this;
	}

	request(options) {
		let reqObj = new XMLHttpRequest();
		reqObj.addEventListener('load', options.success)
		reqObj.addEventListener('error', options.fail)
		reqObj.open(options.type, options.url);
		reqObj.send()
	}
}

const miniquery = (el) => {
	return new Miniquery(el);
}
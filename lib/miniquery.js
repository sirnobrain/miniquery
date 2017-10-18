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
			el.classList.remove(className);
		});
		return this;
	}

	on(eventName, cb) {
		this._el.forEach(el => {
			el.addEventListener(eventName, cb);
		});

		return this;
	}

	trigger(eventName) {
		let event = new Event(eventName);

		this._el.forEach(el => {
			el.dispatchEvent(event);
		});
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

const $ = (el) => {
	return new Miniquery(el);
}

// class SweetSelector {
// 	static select(this._el) {
// 		return document.querySelectorAll(this._el);
// 	}
// }

// class DOM {
// 	static hide(elem) {
// 		SweetSelector.select(elem).forEach(el => {
// 			el.style.display = 'node';
// 		});
// 	}

// 	static show(elem) {
// 		SweetSelector.select(elem).forEach(el => {
// 			el.style.display = 'block';
// 		});
// 	}

// 	static addClass(className, elem) {
// 		SweetSelector.select(elem).forEach(el => {
// 			el.className += className;
// 		});
// 	}


// 	static removeClass(className, elem) {
// 		SweetSelector.select(elem).forEach(el => {
// 			el.classList.remove(className);
// 		});
// 	}
// }

// class EventDispatcher {
// 	static on(className, eventName, cb) {
// 		let elem = SweetSelector.select(className);
// 		let event = new Event(eventName);

// 		elem.forEach(el => {
// 			el.addEventListener(eventName, cb);
// 		});
// 	}
// 	static trigger(className, eventName) {
// 		let elem = SweetSelector.select(className);
// 		let event = new Event(eventName);

// 		elem.forEach(el => {
// 			el.dispatchEvent(event);
// 		});
// 	}
// }

// class AjaxWrapper {
// 	static request(options) {
// 		let reqObj = new XMLHttpRequest();
// 		reqObj.addEventListener('load', options.success)
// 		reqObj.addEventListener('error', options.fail)
// 		reqObj.open(options.type, options.url);
// 		reqObj.send()
// 	}
// }
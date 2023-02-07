const Keyboard = {
	elements: {
		main: null,
		keysContainer: null,
		keys: [],
	},

	eventHandlers: {
		oninput: null,
		onclose: null,
	},

	properties: {
		value: '',
		capslock: false,
	},

	init() {
		// create main elements
		this.elements.main = document.createElement('div');
		this.elements.keysContainer = document.createElement('div');

		// setup main elements
		this.elements.main.classList.add('keyboard', '1keyboard--hidden');
		this.elements.keysContainer.classList.add('keyboard__keys');
	},

	// time 29:34 on dcode virtual keyboard

	_createKeys() {},

	_triggerEvent(handlerName) {
		console.log('Trigger! Event Name: ' + handlerName);
	},

	_toggleCapsLock() {
		console.log('Caps Lock Toggles!');
	},

	open(initialValue, oninput, onclose) {},

	close() {},
};

window.addEventListener('DOMContentLoaded', function () {
	Keyboard.init();
});

enyo.kind({
	name: "Dialog",
	kind: "onyx.Popup",
	layoutKind: "FittableRowsLayout",
	classes: "dialog",
	centered: true,
	modal: false,
	scrim: true,
	floating: true,
	autoDismiss: false,
	showing: false,
	published: {
		message: "",
		okText: "OK",
		onOk: (function(){}),
		onOpen: (function(){})
	},
	create: function () {
		this.inherited(arguments);
		this.messageChanged();
		this.okTextChanged();
	},
	rendered: function () {
		this.inherited(arguments);
		this.onOpen(this.owner);
	},
	okTextChanged: function () {
		this.$.ok.setContent(this.okText);
	},
	messageChanged: function() {
		this.$.message.setContent(this.message);
	},
	confirm: function (inSource, inEvent) {
		this.hide();
		this.onOk(this.owner, inEvent);
		this.close();
	},
	close: function () {
		this.hide();
		this.destroy();
	}
});
enyo.kind({
	name: "Confirm",
	kind: "Dialog",
	classes: "confirm",
	published: {
		cancelText: "CANCEL",
		onCancel: (function(){})
	},
	components: [
		{name: "message", classes: 'message', allowHtml: true },
		{layoutKind: "FittableColumnsLayout", components: [
			{name: "cancel", kind: "onyx.Button", ontap: "cancel", classes: "light-button"},
			{name: "ok", kind: "onyx.Button", ontap: "confirm", classes: "dark-button"}
		]}
	],
	create: function () {
		this.inherited(arguments);
		this.cancelTextChanged();
	},
	cancelTextChanged: function () {
		this.$.cancel.setContent(this.cancelText);
	},
	cancel: function (inSource, inEvent) {
		this.onCancel(this.owner, inEvent);
		this.close();
	}
});

function confirm (message, context, options) {
	enyo.asyncMethod(context, function () {
		options = options || {};
		options.kind = "Confirm";
		options.message = message;
		this.createComponent(options)
		.setShowing(true);
	});
}

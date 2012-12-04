enyo.kind({
	name: "Prompt",
	kind: "Dialog",
	classes: "prompt",
	published: {
		okText: "CONTINUE",
		cancelText: "CANCEL",
		inputValue: "",
		inputType: "tel",
		onCancel: (function(){})
	},
	components: [
		{name: "message", classes: "message" },
		{kind: "onyx.InputDecorator", components: [
			{name: "promptInput", kind: "onyx.Input", type: "tel"}
		]},
		{layoutKind: "FittableColumnsLayout", components: [
			{name: "cancel", kind: "onyx.Button", ontap: "cancel", classes: "light-button"},
			{name: "ok", kind: "onyx.Button", ontap: "confirm", classes: "dark-button"}
		]}
	],
	create: function () {
		this.inherited(arguments);
		this.cancelTextChanged();
		this.inputValueChanged();
		this.inputTypeChanged();
	},
	cancelTextChanged: function() {
		this.$.cancel.setContent(this.cancelText);
	},
	inputValueChanged: function () {
		this.$.promptInput.setValue(this.inputValue);
	},
	inputTypeChanged: function () {
		this.$.promptInput.setAttribute('type', this.inputType);
	},
	confirm: function(inSender, inEvent) {
		inEvent.value = this.$.promptInput.hasNode().value;
		this.inherited(arguments);
	},
	cancel: function(inSender, inEvent) {
		inEvent.value = this.$.promptInput.hasNode().value;
		this.onCancel(this.owner, inEvent);
		this.close();
	}
});

function prompt(message, context, options) {
	enyo.asyncMethod(context, function () {
		options = options || {};
		options.kind = "Prompt";
		options.message = message;
		this.createComponent(options)
		.setShowing(true);
	});
}

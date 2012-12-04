enyo.kind({
	name: "Alert",
	kind: "Dialog",
	classes: "alert",
	components: [
		{name: "message", classes: "message"},
		{layoutKind: "FittableColumnsLayout", components: [
			{ name: "ok", kind: "onyx.Button", ontap: "confirm", classes: "dark-button" }
		]}
	]
});

function alert (message, context, options) {
	enyo.asyncMethod(context, function () {
		options = options || {};
		options.kind = "Alert";
		options.message = message;
		this.createComponent(options)
		.setShowing(true);
	});
}

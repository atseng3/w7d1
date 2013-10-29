(function(root) {
	var PT = root.PT = (root.PT || {});

	var PhotoFormView = PT.PhotoFormView = function() {
		this.$el = $('<div>');
	}

	_.extend(PhotoFormView.prototype, {

		render: function() {
			var renderedForm = JST["photo_form"]();
			this.$el.html(renderedForm);

			return this;
		},
		submit: function(event) {
			debugger
		}
	})
})(this);
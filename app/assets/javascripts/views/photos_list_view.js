(function(root) {
	var PT = root.PT = (root.PT || {});

	var PhotosListView = PT.PhotosListView = function() {
		this.$el = $("<div>");
	};

	_.extend(PhotosListView.prototype, {
		render: function(photos) {
			var that = this;
			this.$el.html("<ul></ul>");
			_.each(photos, function(photo) {
				that.$el.children().append("<li><img src='" + photo.url + "'></li>");
			});

			return this;
		},
	});
})(this);
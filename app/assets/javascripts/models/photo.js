(function(root) {
	var PT = root.PT = (root.PT || {});

	var Photo = PT.Photo = function(attributes) {
		this.attributes = attributes;
	};

	_.extend(Photo.prototype, {
		get: function(attr_name) {
			return this.attributes[attr_name];
		},

		set: function(attr_name, val) {
			this.attributes[attr_name] = val;
			return val;
		},

		create: function(callback) {
			if (!this.id) {
				var that = this;
				$.ajax({
					url: "/api/photos",
					type: "POST",
					data: {photo: that.attributes},
					success: function(result) {
						callback(result);
						_.extend(that, result);
						Photo.all.push(result);
					}
				});
			}
		}
	});

	Photo.fetchByUserId = function (userId, callback) {
		$.ajax({
			url: "/api/users/" + userId + "/photos",
			type: "GET",
			success: function(photos) {
				var photo_data = photos.serializeJSON();
				callback(photo_data);
			}
		});
	}

	Photo.all = [];

})(this);
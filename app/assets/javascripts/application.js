// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require ./jquery.serializeJSON.min.js
//= require_tree .

function Photo(attributes) {
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
				data: formData,
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
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
//= require underscore
//= require ./jquery.serializeJSON.min.js
//= require jquery.serializeJSON
//= require_tree .
//= require_tree ./models
//= require_tree ./views
//= require_tree ../templates




(function(root) {
	var PT = root.PT = (root.PT || {});

	PT.initialize = function() {

		PT.Photo.fetchByUserId(CURRENT_USER_ID, function(photos) {
			var photosList = new PT.PhotosListView();
			var pageContent = photosList.render(photos).$el;
			var photo_form = new PT.PhotoFormView();
			$('div#content').append(pageContent).append(photo_form.render().$el);
		});

		$(document).on('submit', '#photo_create', function(event) {
			debugger
			var formData = $(event.currentTarget);
			PT.PhotoFormView.create(formData);
		});
	}
})(this);

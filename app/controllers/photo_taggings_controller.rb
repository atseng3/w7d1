class PhotoTaggingsController < ApplicationController
  # before_filter :tagging_own_photo, :only => [:create]

  def index
    @photo_taggings = PhotoTaggings.all

    respond_to do |format|
      format.html
      format.json { render :json => @photo_taggings.to_json }
    end
  end

  def new
    @photo_tagging = PhotoTagging.new
  end

  def create
    @photo_tagging = PhotoTagging.new(params[:photo_tagging])
    if @photo_tagging.save
      render :json => @photo_tagging
    else
      render :json => @photo_tagging.errors, :status => 422
    end
  end
end
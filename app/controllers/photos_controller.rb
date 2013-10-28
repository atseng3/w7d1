class PhotosController < ApplicationController
  def index
    @photos = Photo.all

    respond_to do |format|
      format.html
      format.json { render :json => @photos.to_json }
    end
  end

  def new
    @photo = Photo.new()
  end

  def create
    @photo = Photo.new(params[:photo])
    if @photo.save
      render :json => @photo
    else
      render :json => @photo.errors, :status => 422
    end
  end
end

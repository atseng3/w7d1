class Photo < ActiveRecord::Base
  attr_accessible :owner_id, :title, :url

  validates :owner_id, :title, :url, :presence => true

  belongs_to(
    :owner,
    :class_name => "User",
    :primary_key => :id,
    :foreign_key => :owner_id
  )

  has_many :photo_taggings
end

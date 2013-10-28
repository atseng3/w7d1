# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user1 = User.create!(username: "ned", password: "ilovecats")

user1.photos.create!(url: "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg",
                    title: "Cute Cat")
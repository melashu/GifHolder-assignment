class Gif < ApplicationRecord
    has_many :users_gifs
    has_many :users, through: :users_gifs
end

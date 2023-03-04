class User < ApplicationRecord
  has_many :users_gifs
  has_many :gifs, through: :users_gifs

  has_secure_password


  validates :email, presence: true, uniqueness: true
end

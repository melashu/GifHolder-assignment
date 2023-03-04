class UsersGif < ApplicationRecord
  belongs_to :user
  belongs_to :gif
end

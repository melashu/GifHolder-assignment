class CreateUsersGifs < ActiveRecord::Migration[6.1]
  def change
    create_table :users_gifs do |t|
      t.references :user, null: false, foreign_key: true
      t.references :gif, null: false, foreign_key: true

      t.timestamps
    end
  end
end

require 'json'

Gif.delete_all
JSON.parse(open("#{Rails.root}/db/gif_seed.json").read)["data"].each do |g|
   Gif.create(:title => g["title"], :url => g["images"]["original"]["url"])
end

Rails.application.routes.draw do
  post 'signup', to: 'users#sign_up'
  post 'login', to: 'sessions#create'
  get 'gifs', to: 'gif#index'
  get "gifs/saved", to: "gif#show"
  post "gifs", to: "gif#create"
  delete "gifs", to: "gif#destroy"
end

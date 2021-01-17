Rails.application.routes.draw do
  post 'signup', to: 'users#sign_up'
  post 'login', to: 'sessions#create'
  get 'gifs', to: 'gif#index'
end

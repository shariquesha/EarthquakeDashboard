Rails.application.routes.draw do
  root 'dashboard#home'
  namespace :api do
    get 'earthquakes' => 'earthquake#index'
    get 'earthquakes/search' => 'earthquake#search'
  end
end

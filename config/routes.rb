Rails.application.routes.draw do
  root 'dashboard#home'
  namespace :api do
    get 'earthquakes' => 'earthquake#index'
  end
end

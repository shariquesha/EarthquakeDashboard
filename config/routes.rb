Rails.application.routes.draw do
  root 'pages#home'
  namespace :api do
    get 'earthquakes' => 'earthquake#index'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

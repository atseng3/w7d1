PhotoTagger::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
    resource :session, :only => [:create, :destroy, :new]

  namespace "api", :defaults => { :format => :json } do
    get '/users/:id/photos', to: 'photos#index'
    get '/photos/:id/photo_taggings', to: 'photo_taggings#index'

    resources :photos, :only => [:create]
    resources :photo_taggings, :only => [:create]
  end

  root :to => "users#show"
end

module Api
  class EarthquakeController < ApplicationController
    def index
      @earthquakes = EarthqaukeValue.page(params[:page])
      render json: @earthquakes
    end
  end
end
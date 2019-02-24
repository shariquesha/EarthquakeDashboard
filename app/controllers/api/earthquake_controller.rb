module Api
  class EarthquakeController < ApplicationController

    def index
      earthquakes = EarthqaukeValue.page(1).per(limit_value)
      time = Benchmark.measure{ earthquakes }
      render json: { 
        earth_quakes: earthquakes, 
        count: EarthqaukeValue.count, 
        page: page_number, 
        search: false, 
        query_time: (time.total * 1000).round(3)
      }
    end

    def search 
      earthquakes = EarthqaukeValue.where(["mag >= ? and mag < ?", search_param, search_param + 1 ])
      time = Benchmark.measure{ earthquakes }
      render json: { 
        earth_quakes: earthquakes,
        count: earthquakes.count,
        search: true,
        query_time: (time.total * 1000).round(3)
        }
    end
    private

    def page_number
      return 1 if params[:page].nil?
      params[:page]
    end

    def search_param
      Integer(params[:mag]) unless params[:mag].blank?
    end

    def limit_value
      Integer(page_number) * 25
    end
  end
end
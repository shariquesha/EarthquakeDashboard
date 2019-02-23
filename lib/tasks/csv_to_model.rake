require 'csv'
namespace :import_earthquake_csv do
  task :create_earthquake_values => :environment do
    csv_text = File.read(File.join Rails.root,"db/data/all_month.csv")
    csv = CSV.parse(csv_text, :headers => true)
    csv.each do |row|
      EarthqaukeValue.create!(row.to_hash.except(:id))
      puts row
    end
  end
end 
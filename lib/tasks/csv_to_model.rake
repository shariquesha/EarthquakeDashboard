require 'csv'
namespace :import_earthquake_csv do
  task :create_incidents => :environment do
    csv_text = File.read('../assets/all_month.csv')
    csv = CSV.parse(csv_text, :headers => true)
    csv.each do |row|
      Moulding.create!(row.to_hash)
    end
  end
end 
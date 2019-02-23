class CreateEarthqaukeValues < ActiveRecord::Migration[5.2]
  def change
    create_table :earthqauke_values do |t|
      t.string "action"
      t.string "time"
      t.string "latitude"
      t.string "longitude"
      t.string "depth"
      t.string "mag"
      t.string "magType"
      t.string "nst"
      t.string "gap"
      t.string "dmin"
      t.string "rms"
      t.string "net"
      t.string "_id"
      t.string "updated"
      t.string "place"
      t.string "_type"
      t.string "locationSource"
      t.string "magSource"
      t.string "horizontalError"
      t.string "depthError"
      t.string "magError"
      t.string "magNst"
      t.string "status"
      t.string "updated"
      t.timestamps
    end
  end
end

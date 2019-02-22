# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_22_215732) do

  create_table "earthqauke_values", options: "ENGINE=InnoDB DEFAULT CHARSET=latin1", force: :cascade do |t|
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
    t.string "data_id"
    t.string "updated"
    t.string "place"
    t.string "type"
    t.string "locationSource"
    t.string "magSource"
    t.string "horizontalError"
    t.string "depthError"
    t.string "magError"
    t.string "magNst"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
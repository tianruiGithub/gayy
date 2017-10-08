class CreateCarousels < ActiveRecord::Migration[5.1]
  def change
    create_table :carousels do |t|
      t.string :title
      t.string :file
      t.string :link

      t.timestamps
    end
  end
end

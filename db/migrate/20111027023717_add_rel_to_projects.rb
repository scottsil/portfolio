class AddRelToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :rel, :string
  end
end

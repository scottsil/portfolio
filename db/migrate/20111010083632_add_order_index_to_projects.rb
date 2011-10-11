class AddOrderIndexToProjects < ActiveRecord::Migration
  def change
    remove_column :projects, :order_index
    add_column :projects, :order_index, :integer, :default => nil
    Project.find_each do |project|
      project.update_attribute(:order_index, nil)
    end
  end
end
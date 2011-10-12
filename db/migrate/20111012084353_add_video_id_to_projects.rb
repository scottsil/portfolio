class AddVideoIdToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :video_id, :string, :default => nil
  end
end

class ApplicationController < ActionController::Base
  protect_from_forgery
  
  def index
    @projects = Project.order(:order_index).all
  end
  
end
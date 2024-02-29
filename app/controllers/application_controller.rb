class ApplicationController < ActionController::Base

	before_action :require_user
	helper_method :current_user, :logged_in?

	def current_user
		@current_user ||= Student.find(session[:student_id]) if session[:student_id]
		# ||= return the result unless it change(don't need to check our database everytime)
	end

	def logged_in?
		!!current_user # !! - used to show boolean value
	end

	def require_user
		if !logged_in?
			flash[:notice] = "you must be logged in to perform that action"
			redirect_to login_path
		end
	end

end

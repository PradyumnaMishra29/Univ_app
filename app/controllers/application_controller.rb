class ApplicationController < ActionController::Base

	helper_method :current_user, :logged_in?
	def current_user
		@current_user ||= Student.find(session[:student_id]) if session[:student_id]
		# ||= return the result unless it change(don't need to check our database everytime)
	end

	def logged_in?
		!!current_user # !! - used to show boolean value
	end

end

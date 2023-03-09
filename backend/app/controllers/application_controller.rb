class ApplicationController < ActionController::API
  helper_method :current_user
  before_action :authenticate_user

  def authenticate_user
    current_user
  end

  def current_user
    token = params[:access_token] || request.headers['Authorization']
    # p token
    if token
      id = JWT.decode(token, Rails.application.credentials[:secret_key_base], true, { algorithm: 'HS256' })[0]['user_id']
      @current_user ||= User.find(id)
    else
      @current_user = nil
    end
  rescue JWT::DecodeError
    nil
  end
end

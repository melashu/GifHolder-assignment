class SessionsController < ApplicationController
  skip_before_action :authenticate_user

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      payload = { user_id: user.id }

      token = JWT.encode payload, Rails.application.credentials[:secret_key_base], 'HS256'
      render json: { message: 'User Signed', token: token }
    else
      render json: { message: 'Email or password is invalid' }, status: 400
    end
  end
end

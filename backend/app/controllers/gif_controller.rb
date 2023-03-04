class GifController < ApplicationController
  def index
   gifs = Gif.all
   render json: gifs
  end

  def show
     render json: @current_user.gifs, as_json: {except:[:title]}
  end

  def create
    user_gif = UsersGif.new(check_parms)
    if user_gif.save
      render json: {message: "Your gif successfuly saved!"} 
    else
    render json: {error: user_gif.errors} 
    end
  end

  def destroy
    saved_gif = UsersGif.find(params[:id])
    render json: {message: "Unsave gif"} if saved_gif.destroy
  end

  private

  def check_parms
    params.permit(:user_id, :gif_id)
  end

end

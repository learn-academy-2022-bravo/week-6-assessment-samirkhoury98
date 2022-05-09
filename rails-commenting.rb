# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)The class BlogPostController (child class) is inheriting from ApplicationController (which is the parent class)
class BlogPostsController < ApplicationController
  def index
    # ---2) We are decarling an instance variable (@post) and assigning it to call onto the entire db, BlogPost. By doing so and making post an instance variable,  we can now call onto BlogPost outside of the index method. BlogPost.all is used to ensure that @post is grabbing every index in the database.
    @posts = BlogPost.all
  end

  # ---3) Created a method called show that will search the database BlogPost for a post with the id that was passed into the params.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Created a method and called it new. The "new" is used everytime you want to create a new entry inside the database"
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Assigning the instance variable @post to create blog_post_params for the BlogPost database to see if @post is deemed to be valid. If so, the create method will return the object and save to the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)We're using the edit method to edit an entiry in the database. In this case the edit method will serch for the entry that contains the params given.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)Assigning the instance variable @post to update blog_post_params for  the BlogPost database. If post is deemed valid then the selected post will be updated.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) With this else statement, I will be directed back home if my post was successfully deleted, if not, I will be redirected to enter the right information needed to delete the post. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Using the private method we are letting rails know here on out all methods will be private.
  private
  def blog_post_params
    # ---10) Using the require method we are letting the user know we require the model (:blog_post) but the are permitted to change the title and content of an entry.
    params.require(:blog_post).permit(:title, :content)
  end
end

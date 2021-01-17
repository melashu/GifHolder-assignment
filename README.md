This project is a take-home challenge designed to evaluate full stack developers who are interested in working at Dovetale. The challenge involves implementing some basic functionality within a Rails backend and React frontend.

## The challenge

In its starting state, the React app and Rails app include a basic implementation of user authorization, enough to create new users and login as existing users.

Your job is to implement the remaining scope of the project, which calls for an application that allows users to search for GIFs and save their favorites.

Project scope (to be implemented):
- As a User, I should be able to view a feed of GIFs
- As a User, I should be able to search for GIFs based on their title
- As a User, I should be able to "save" a GIF so that I can view it later
- As a User, I should be able to "unsave" a GIF that I no longer want saved 
- As a User, I should be able to filter the feed of GIFs for my "saved" GIFs

Expectations:
- On the frontend, use only functional components and hooks rather than class components
- Ensure that a user's saved GIFs are persisted on the backend 
- Ensure that two users won't (and can't) see one another's saved GIFs


## Prerequisites
To run the applications you'll need the following installed on your machine:
* ruby (https://www.ruby-lang.org/en/documentation/installation/)
* node (version 8, newer versions aren't supported by yarn, https://nodejs.org/en/download/)
* yarn (https://yarnpkg.com/lang/en/docs/install/)


## Getting started
1. Clone this repository to your local machine
2. Install dependencies for the React application: `cd` into the frontend directory and run `yarn install`
3. Install dependencies for the Rails application: `cd` into the backend directory and run `bundle install`
4. Run the database migrations for the Rails application
5. Seed the Rails application database with GIFs using the seed file provided in `/db/seeds.rb`
6. Start the frontend application: `cd` into the frontend directory and run `yarn start`. The frontend application should be running at http://localhost:3001
7. Start the backend application: `cd` into the backend directory and run `bundle exec rails s`. The backend application should be running at http://localhost:3000
8. Navigate to http://localhost:3001 in your browser, you should be redirected to the login and signup page


## Submission
Please submit the updated repository containing the completed exercises as a single zip file.
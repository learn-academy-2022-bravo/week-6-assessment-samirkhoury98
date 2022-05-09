# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: To create the association between the Cohort and the Students table we have to assign a foreign key to Students. The foreign key always goes on the belongs_to side, which in this case is Students. The name of the foreign key should be 'model id', and after we do create:migrate to make sure the changes occur

  Researched answer: Another way to add foreign keys to your entire rails schema is to use the yeet_dba gem. Yeet_dba has generators that scan your entire database searching for columns missing foreign keys.



2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that must always be passed params are show, update, delete. These routes require params when used because they are designed to change
  a specific item in the database and the params lets you know which item to change.

  Researched answer: The params used for the RESTful routes will create a path to access a specific item in the database using a colon (:)



3. Name three rails generator commands. What is created by each?

  Your answer: Rails generate model: creates the model., rails generate controller: creates the controller, which, and rails generate resource creates the model, migration, routes, and controller.

  Researched answer: Rails generate model: creates the model, migration, and test files. Rails generate controller requires you to enter methods you want to include in the controller. Rails generate resource allows you to enter the name of the resource you want to create, the table column names and types,and you can even create foreign keys here as well.  



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
Controller method: students#index This will display the list of students
action: "POST"   location: /students       
Controller method: students#create This will create a new student
action: "GET"    location: /students/new
Controller method: students#new This will create a HTML form for creating a new student
action: "GET"    location: /students/2  
Controller method: students#show This will show a specified student based on the id number, in this case 2
action: "GET"    location: /students/2/edit    
Controller method: students#edit This will create an HTML form for editing a student
action: "PATCH"  location: /students/2      
Controller method: students#update This will update a specified student based on the id number in this case 2
action: "DELETE" location: /students/2      
Controller method: students#destory This will delete a specified student based on the id number in this case 2


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).




1. As a user, I can click a 'Sign Up' button to create an account for my app

2. As a user, I see a prompt asking me to enter an email, create a username and  create password for my account (username and password cannot be less than 6 characters) (username and password cannot be identical)

3. As a user, I receive an email asking to verify the email address given

4. As a user, I am brought back to a log in page

5. As a user, I can sign in to my app using a username and password

6. As a user, I can click a button that says "Start a new to do list"

7. As a user, I can name my to do list by inputting text in the input field

8. As a user, I can can click a  "+" button to add tasks to my to do list

9. As a user, I can list a task by inserting text in the input field

10. As a user, I can delete a task.

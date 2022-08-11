# Wedding-App-React-Project


Wedding-App-React-Project
This app was created for my project defence @ SoftUni for my React course.
The project was generated with React version 18.2.0.
React web application for reading and creating wishes, TODO:also like and comment on them.

## Built with:

### Frontend:

•	React 18.2.0
•	React Router DOM
•	React Swiper
•	HTML
•	CSS
The HTML and CSS is written by myself with basic knowledge and lots of documentation searches. It will be update in future.
•	Font Awesome


### Backend & Database:

•	Firebase
•	Firebase Store
•	Firebase Authentication

## Permissions:

| **Permissions for recipes**    | User | Guest | 
| :--------------------------    | :---: | :---:|
| View Home page                 | ✅   | ✅   |
| View About page                | ✅   | ✅   |
| See Wish page                  | ✅   | ✅   |
| Create WishCard                | ✅   | ❌   |
| Edit wish   * owner            | ✅   | ❌   |
| Delete wish   * owner          | ✅   | ❌   |
| See all wishes                 | ✅   | ✅   |
| See all wishes  likes          | ✅   | ✅   |
| Login                          | ❌   | ✅   |
| Register                       | ❌   | ✅   |
| Logout                         | ✅   | ❌   |
| Send rsvp                      | ✅   | ❌   |
| See add wish button            | ✅   | ❌   |
| See guests page                | ✅   | ❌   |


##RSVP Wedding App

What Is an RSVP?
The term "RSVP" comes from the French expression répondez s'il vous plaît, meaning "please respond." If RSVP is written on an invitation, it means the host has requested that the guest respond to say if they plan to attend the party.This WebApp introduce the unique story of the grooms and gives them opportunity to get responses from their guests .Also the guests can write their wishes at the Book of wishes.

###Start the app
To start the application install all dependecies for the client and the rest-api with 
`npm install`.

Then start the client with
`npm start`.

This will navigate to http://localhost:3000/ in the browser.

Or you can see live demo here :………………………………………

### Home Page (logged out user)

Invites the user to log in to their account or to register. 

![Home Page View](https://github.com/DannyDoneva96/Project-My-Wedding/blob/main/photos/logout.jpg)

### Home Page (logged in user)

Navigation have changed.

![Home Page View](https://github.com/DannyDoneva96/Project-My-Wedding/blob/main/photos/login.jpg)
The logout action is available to logged-in users. Upon success, clear any session information and redirect the user to the Home page.

### Register Page (logged out user)

Register create user inside the database with **username**, **email** and **password**. Password inside the database is hashed and both passwords must match!
MORE VALIDATIONS YET TO BE MADE
After successful registration redirects to the Home page, with an already logged-in user.

![Registration Page View](https://github.com/DannyDoneva96/Project-My-Wedding/blob/main/photos/reg.jpg)

### Login Page (logged out user)

Logging an already registered user with the correct email and password.
After successful login redirects to the Home page, with an already logged-in user.

![Login Page View](https://github.com/DannyDoneva96/Project-My-Wedding/blob/main/photos/%D0%BB%D0%BE%D0%B3%D0%B8%D0%BD%D0%BF%D0%B0%D0%B3%D0%B5.jpg)

### Logout Page (logged in user)

The logout action is available to logged-in users. Upon success, clear any session information and redirect the user to the **Home page**.


### Wishing Book 

Here We have Swiper Component with every wish that is saved in our Database .
You can move the cards with click and mouse move.
There is pagination as well.
If there is no wishes -paragraph appears with text “No wishes yet ”

![Book of Wishes Page View](https://github.com/DannyDoneva96/Project-My-Wedding/blob/main/photos/comment.png)

The +ADD Button shows Modal with input fields:
NAME : We expect name here
Photo : Image Url
Related: What is you relationship with the grooms 
Message: and you wish 
With click on SEND button we create new Wish in this section 
We cansle the operation with click on Close or anywhere out of the modal area.

![Book of Wishes Page View](https://github.com/DannyDoneva96/Project-My-Wedding/blob/main/photos/addComments.jpg)

On this photo is clicked on Edit button 
It opens another modal only over the card section and gives you the same inputs wich changed the commend .
TODO: That must happen only if is owner 

![Book of Wishes Page View](https://github.com/DannyDoneva96/Project-My-Wedding/blob/main/photos/edit%20comment.jpg)

Every Wish card has two emoticons in the right top corner which shows likes and dislikes
with  click on the emoticon you can add like or dislike 

###Invitation Page

Shows Invitation and direct you to leave your respond in RSVP page

![ Invitation Page View](https://github.com/DannyDoneva96/Project-My-Wedding/blob/main/photos/invitation.png)

### RSVP Page
Here we have form with input fields ,select options field and textarea.
On Submit this information is saved in our database and is shown in our Guest page.

![ RSVP Page View](https://github.com/DannyDoneva96/Project-My-Wedding/blob/main/photos/rsvp.jpg)


The Rsvp Data from a user is displayed in order:
user.name will be attending user.event 
For all the Data in our FireStore


![ RSVP Page View](https://github.com/DannyDoneva96/Project-My-Wedding/blob/main/photos/Untitled.png)

Here you can see More details about every guest respond. With click on more details button you will be redirect to url with specific id of the respondUser.

![ RSVP Page View](https://github.com/DannyDoneva96/Project-My-Wedding/blob/main/photos/details.png)

###About US
This is static page for now describing grooms unique story !

![About US Page View](https://github.com/DannyDoneva96/Project-My-Wedding/blob/main/photos/aboutus.jpg)

### 404 Page Not Found
If the url is not valid  Page 404 is rendered!

![404 Page View](https://github.com/DannyDoneva96/Project-My-Wedding/blob/main/photos/404.jpg)




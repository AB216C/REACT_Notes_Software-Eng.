

## INSTALLATION

Initialize the Project:
Create a folder where the project will be created
Open your terminal in that directory
Run  
# npx create-vite spa-router --template react 

to create a new React project using Vite.
Navigate into your project directory: cd spa-router.
Install the necessary dependencies by running npm install

# Install react-router-dom 
to handle the navigation and routes by running: npm install react-router-dom
Install Axios to make the API calls to JSONPlaceholder by running: 

# npm install axios


## Defining Routes and Route
The Routes component, contains all the individual Route components.  It defines when a group of Route components are about to be created
Inside of the Route component, there's a path attribute that defines the URL this Route will be responsible for.
In this case, the path is / which is the home route, or more specifically, when the user goes to: http://localhost:5173/
The element attribute defines what component will be shown when the defined path is accessed.
In this case, when the user goes to: http://localhost:5173/ it will display the HomePage component


## Single Page Applications (SPAs), Axios, and React Routing


Explanation:
Imports
We import the usual useState and useEffect but this time we import Link from react-router-dom and axios 
Link will allow us to create a link that will take us to a defined path
Axios will allow us to make HTTP requests to JSONPlaceholder just like fetch did

State Variables
users - this is where we will store all the users that come back from the JSONPlaceholder API call
loading - while this is true we will use this to show a message letting the user know the API call is happening
error - this will be used to show any errors that happen during the API call

## useEffect API call using axios
useEffect has an empty dependency array so this will only run once when the component is mounted
axios.get() is Axios's way of doing a GET request.
The first parameter we pass is the URL of the HTTP Request.  In this case we are getting all the users from JSONPlaceholder
Next, axios wants us to attach a .then() which will receive the returned data into response
When then setUsers to response.data which is the list of users
The reason it's response.data is because Axios puts the returned users inside of a data property automatically for us
Notice how we didn't have to use .json() on the returned data like we have to with fetch.  Axios has that built in.  It does the conversion for us which is nice.
The we setLoading to false so the loading message will disappear and the JSX returned at the bottom of the page will show up
If there are any errors during the HTTP Request, it will setError to the error message and setLoading to false so the value of error can display on the page

if loading and error statements
If loading is true it will return and display the "Loading users..." message.  
The second loading is false, it will stop showing that message and display the returned JSX below
If error has a value, it will return and display the error message defined in the catch block of the axios call.

## Returned JSX
Most of this is review.  We have a header.  Then we create a ul by looping through the users state variable that was set in the axios call using map.
We access the user's ids, names, emails, and phone numbers, using the temporary loop variable user
<li key={user.id} is used so React can individually keep track of each  li being created for future rendering
Then for each user, we create a link that says "Todo List" using React Router's Link 
Each individual Link has a to attribute that defines what path the user will go to when the link is clicked
These Link components will take us to the path: /user-todos/${user.id}
${user.id}  is being pulled from each individual user.  
To illustrate what is going on, let's say a user has an ID of 13.  This would create a link in this user's section that has a to attribute that equals /user-todos/13
Eventually, these links will take us to the user's own personal todo list 
NOTE: These individual todo lists will be rendered in the UserTodos.jsx component, which we haven't built out yet
NOTE: The /user-todos/${user.id} path hasn't been defined in App yet either, so the Link components won't work until we do so.

Explanation:
## Import and Route
We import the UserTodos component so we can use it.  This will allow us to show an individual user's todo list pulled from JSONPlaceholder
We setup a new Route 
The element that will show if this Route is activated is UserTodos
## The path of that Route is /user-todos/:userId
:userId is a route parameter used to pull values from the URL that activated this Route.  
In this case :userId will create a route parameter, which will function much like a variable, called userId and set it equal to the value that was in the same location :userId was in the URL
For example: if I'm on the Users component, and I click on the "Todo List" Link of a user with the ID of 7, it will take me to /user-todos/7 because that is what the to attribute defines.
## The /user-todos/:userId 
Route defined in App will activate and store the number 7 inside of the route parameter userId
We will then be able to access userId on the element the Route displays.  
In our case, that will be in the  UserTodos component where we will use userId to display that user's todo list

Explanation:
Imports and Returned JSX
We bring in Link since that is what will create the links to navigate from one route to another
We return a nav semantic element with a header
We use Link to define two simple links:
# A link that will take us to the home / path which will show the HomePage component
A link that will take us to the /users path which will show the Users component


Explanation:
Imports
We do the usual imports except for useNavigate which allows us to send the browser to a different path using code instead of a click from the mouse

## Variables and State Variables
navigate - this variable will store what useNavigate() returns.  This will allow us to send the browser where we want in the code.
countdown - this state variable is set to 10 by default and we will use it to have a countdown display on the page

## useEffect
This useEffect has navigate in it's dependency array, 
This means that whenever the value of navigate changes the code inside of useEffect will run again

## setInterval - 
We setup a variable interval and store setInterval in there which runs every 1000 milliseconds (1 second)
Each second it runs setCountdown which takes the previous value of countdown as a parameter, passes it to an anonymous function, and then minuses 1 from it.  This is what is making the countdown happen each second.

## setTimeout 
 We setup a variable timeout and store setTimeout in there which will run the code inside after 10000 milliseconds (10 second)
After the 10 seconds are over it will run navigate('/') which will redirect the user to the home page

## Cleaning up - 
after setInterval and setTimeout are done it will then run clearInterval and clearTimeout
When you use setInterval or setTimeout, they continue to run in the background, even if the component that created them is no longer in use. Running clearInterval and clearTimeout ensures that they stop running when they’re no longer needed.

Returned JSX
## We return a 404 message
We use the state variable countdown to display the numbers as they have 1 taken away from them each second
We use Link to let them click on the link to go back to the home route / if they don't want to wait the 10 seconds.


Explanation:
Import and Apply
We import the NotFound component so we can use it
We create a new Route with a path of * and an element of <NotFound /> 
When this Route path is accessed, it will display the NotFound component
The path of this Route is * which means anything after the URL of the React app: http://localhost:5173/.  
Because of this, we need to make sure this Route is at the bottom.  
React Router checks for matches starting from the top and then goes down.  
When a path matches, it will display the component
If we have this Route at the bottom, and if a match isn't found with the routes above, then it will match with the * path and display the NotFound component.  
If you put this Route at the top, it will never show any of the other Routes because the * path will match with everything so you'll always see the NotFound component.
Test it!
See if it works by going to http://localhost:5173/qwerty (or any other URL that isn't handled) and we should see the NotFound component with the 10 second countdown


🛑 Common React Router Pitfalls and Tips
# Not Using BrowserRouter Correctly
Pitfall: Forgetting to wrap your routes in <BrowserRouter>, or placing it in the wrong place, can cause errors.
Tip: Always ensure that <BrowserRouter>wraps around your entire routing logic. Usually, it’s best to place <BrowserRouter> in the top-level main.jsx or the App.jsx file.

# Using useNavigate Incorrectly
Pitfall: Calling useNavigate() outside of an event or in a render can cause unwanted navigation behavior.
Tip: Always call navigate() (from useNavigate) within an event handler, like onClick or onSubmit. Avoid calling it during the initial render or outside of an effect to avoid triggering unwanted navigations.

# Not Handling 404 Pages
Pitfall: Not setting up a "catch-all" route can lead to an empty page for undefined routes.
Tip: Define a * route at the end of your Routes list to handle 404 cases. This route will match any path not defined in your routes

# Accessing Route Parameters Incorrectly
Pitfall: Using deprecated props like match to access route parameters instead of useParams can lead to errors.
Tip: Use useParams to access URL parameters in a functional component:
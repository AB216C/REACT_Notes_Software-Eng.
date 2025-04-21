# React Bootstrap
Welcome to this lesson on React Bootstrap, where we’ll learn how to create beautiful, responsive UIs in React using the Bootstrap framework seamlessly adapted for React’s component-based architecture. React Bootstrap provides all of Bootstrap’s popular components—buttons, forms, modals, badges, spinner, carousels and more—repackaged as React components, so you can create well-designed layouts.

Using React Bootstrap offers several advantages: 

speeds up development by providing pre-styled, ready-to-use components
supports custom theming for a personalized look
ensures mobile-first, responsive design across different screen sizes. 
is optimized for React’s virtual DOM, providing better performance and smoother user experiences compared to traditional Bootstrap.

## Explanation-HomePage
Imports
We are importing all of the Bootstrap functionality (Container, Row, etc.) using destructuring which is not the preferred way
When you import this way, it may bring in additional code that isn't explicitly used, potentially increasing bundle size, especially in older versions of the library.
Also, there is a chance that the entire react-bootstrap module is included in your bundle, even if you're only using a few components.
We will cover the recommended way of importing React Bootstrap in the next component.  For now, we will leave it as is so we can see both ways

# Layout using Container Row and Col:
Container is used when you want to use the Bootstrap grid for a layout.  
You define any rows in the layout using Row and any columns within that row using Col
In the first Row we have one Col that contains the welcome message
In the second Row we have one Col that contains the Carousel

# The Carousel Component
A Carousel in Bootstrap is a way to cycle through elements on a page like a slideshow
<Carousel> marks where it begins  </Carousel> marks where it ends
<Carousel.Item> defines the things that go in the slideshow
In our case we are using images pulled from an outside service
<Carousel.Caption> defines what goes on top of each image/slide
We are applying a textShadow to the caption because the default shadowing doesn't make the text stand out very well

# The images
We are using className to apply specific Bootstrap styles to all the images in the slideshow
Each image will have a display of block (d-block) and their width will be 100% of the container it's in (w-100)
picsum.photos is the service we are using to pull in placeholder images
https://picsum.photos/1200/600?random=1 - gives us a random 1200px x 600px image  
We are using ?random=2 and ?random=3 on the other two images to ensure we don't get the same random image on all three slides


## Explanation-NAVBAR PAGE
# Imports
Before, we mentioned the way the imports are done in HomePage wasn't the preferred way.
Here in NavBar, each individual Bootstrap component has it's own import statement which is the recommended way
We import what we want using this pattern:  import {nameOfComponent} from 'react-bootstrap/{nameOfComponent}'
This import method directly pulls in each individual component, reducing bundle size and improving performance by excluding other unused components. 
It’s the recommended approach for optimizing performance, as it ensures that only the components you need are included.

# React Bootstrap's Navbar component:
<Navbar> defines when the navigation bar begins and ends.  Here are it's props:
bg="info" - controls the background color of the navigation bar.  
Uses the common colors of Bootstrap (success, danger, dark, etc.)
variant="dark" - controls the color of the text in the navigation bar.  Could also use "light"
expand="lg" - defines the screen width at which the Navbar switches from the collapsed mobile version to the fully expanded desktop version.
In this case we used "lg" which expands at large screens (992px and up).
className="p-3 mb-4" - gives the navigation bar an all around padding of 3 and a margin bottom of 4

<Navbar.Brand> defines the text in the left hand side of the Navbar
href="/" - this turns the brand into a link that will take the user to the home route.  This is common practice in web design

<Navbar.Toggle> controls whether a menu icon (three stacked horizontal lines) will show up on the right hand side when the page is in mobile view
aria-controls="basic-navbar-nav" - improves accessibility by identifying which element the toggle button controls

<Navbar.Collapse> - wraps around items like <Nav> components, allowing these items to collapse and expand as needed.
id="basic-navbar-nav" - this is how aria-controls knows which element it's controlling

<Nav> - used to organize and display a set of navigation links or items.

<Nav.Link> - provides a styled link that integrates well with the Bootstrap navigation bar
as={NavLink} - makes the <Nav.Link> function as a NavLink React Router component
The main difference between React Router's NavLink and Link is NavLink is able to use active styling
Active styling is special styling applied to a navigation link when it matches the current URL path.  

It is a visual cue to the user that tells them what page they are currently on
activeclassname="active" - this applies the active styling that we just discussed.  It tells the <Nav.Link> to apply special styling to when their routes are currently being viewed
to="/" and to="/users" - defines what routes are accessed when the links are clicked.  
In our case, the "Home" link will go to the / route and the "Users" link will to go the /users route.
We will create those later just like we did in the last lesson

<NavDropdown> - allows a link to have a sub menu of additional links appear when it's clicked
title="Examples" - defines what the clickable text of the link will be that shows the sub menu
id="basic-nav-dropdown - a basic id that identifies this <NavDropdown>

<NavDropdown.Item> - creates a link inside of the dropdown menu
href="/user-form" - defines what route is accessed when the <NavDropdown.Item> is clicked


## Explanation-NotFound Page
# Imports
All of these imports are ones we've already used except for Badge (we will discuss that later). And we are doing them in the recommended manner.

## The Countdown and Redirect using navigate
All the code is the same from the last lesson until we get to the returned JSX

## Returned Container in the JSX
We are using Container so the page will use the Bootstrap layout
The message is the same from the last lesson
The only difference is we are using putting the state variable countdown inside of a Badge component 

The Badge component is used to display a numerical value or a label on an interface element to usually help it stand out.  Ours has the following props:
bg="primary" - controls the background color of the Badge using Bootstrap colors
className="mb-3 fs-2" - applies a margin bottom of 3 and a font size of 2 to the Badge

## Explanation-Users page
#Imports
We are doing the same thing that we've already done a few times now.  The only difference is the new React Bootstrap components we will be using

State Variables and API Call
All of this code is the same as the last lesson until we get to if(loading) statement

# if(loading) show Spinner
We changed up the message that appears, if loading is true, to use a Bootstrap layout Container component with a message and Spinner inside
Spinner - shows an animation that tells the user something is being loaded
animation="border"  - defines the type of animation the Spinner will perform.  "border" is a circle spinning around.  The other option is "grow" which has a circle growing larger and larger
variant="info" - defines what color the Spinner will be
style={{ marginRight: '15px' }}  - applies a margin right of 15px so there will be space between the message and the Spinner
role="status" - helps assistive technologies, such as screen readers, to better understand the purpose of the Spinner

# TIP - if the App is loading the API too quickly, and you aren't able to see the loading message, you can "slow" your browser down by doing the following (this works in Chrome and Brave):
Open up the inspector/Developer Tools - you can do this by:
Right clicking on an empty area of the page and choose Inspect 
OR Pressing F12
OR Click on the menu in the upper right of the browser, choose more tools, choose developer tools
Once the Developer Tools are showing, click on the Network tab
Click where it says No Throttling
Choose 3G or Slow 4G 
This will force the browser to simulate that speed which will allow the loading message to display.  If it's still not showing, pick a slower speed.  3G usually does a good job.

# Returned JSX - Container, Row, and Col
We are using a Container with one Row 
Each time the mapping of users runs it will create a new Col in that Row
Each user will be displayed horizontally in the Row.  
When there is no more space left it will go down to the next line making more Col in that Row

# Returned JSX - Card
Inside of each Col is a Card
<Card> - a flexible and extensible container that is used to display various types of content.  We are going to put each user into their own <Card>
Each <Card> is given a 18rem width
<Card.Body> - defines where the the content of each card begins and stops
<Card.Title> - the larger and bolder text that shows up at the top of each card
<Card.Subtitle> - the sub text below the title
Each subtitle has a margin bottom of 2 and the text is muted (grayed out)
<Card.Text> - the body text of the card
The text of the card has a margin top of 3
<Card.Link> - creates a clickable link inside of the card
href={`mailto:${user.email}`} - when <Card.Link> is clicked, it uses mailto which opens the default email program on the computer and put the user's email into the "To:" field.  
The links also have a margin bottom of 3, block display, and the underline has been removed 

#Returned JSX - Button
<Button> - creates a styled button on the page
href={`/user-todos/${user.id}`} - when the button is clicked it will go to the route that handles the todos for the user


## Explanation-userTodos Page
# Imports
We are doing the same thing that we've already done a few times now.  The only difference is the ListGroup import

# State Variables and API Call
All of this code is the same as the last lesson until we get to if(loading) statement

# if(loading) show Spinner
This is the same as what we did in Users
The only difference is what our message says: "Loading User Todos..."

# Returned JSX 
We have a Container just like in the other components.  It's to make it use Bootstrap's layout
Then we use a ListGroup which create a series of related content items usually in a vertical list
<ListGroup> - defines where the ListGroup starts and ends
We gave it a margin top of 4 to help separate it from the <h4> above
as="ol" - this tells the ListGroup to render as an ordered list because we want each todo to be numbered
numbered - tells the list to be rendered as a numbered list.
<ListGroup.Item> - defines an individual item inside of a ListGroup
key={todo.id} - helps React track each ListGroup.Item enabling efficient updates and rendering.variant={todo.completed ? "info" : "warning"} - If the todo's property completed is true the variant or background color of the item will be info (light blue) if it's false it will be warning (yellow)
{todo.completed ? "✅" : "❌"} - {todo.title} - If the todo's property completed is true the ✅will display, if it's false the ❌ will display
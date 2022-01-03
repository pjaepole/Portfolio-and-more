### About the Project
This is my personal project for Todo list app.<br/>
I know this is the most common project you see online for developer to do and I also have seen a lot of videos about the to-do list,<br/>
but I wanted to make it personal by adding functionality that "I" think will be useful to the user that was not in the tutorials online.

### Deployment

- Deployed with vercel: [Link to Website](https://todo-app-ten-smoky.vercel.app/)
 
Non Redux version 
**(This is now removed)**
- can add delete todos individually
- filter todo based on completion
- delete all completed todo
- can filter todos based on completion status



**Redux version added<br/>**
- Functionality
  - can now add todo using redux
  - can now toggle the todo's complete status by clicking on the todos
  - can now delete todos by clicking the delete button
  - can now filter todos by selecting option from drop down selection
  - added combineReducer to the reducer
  - can now edit the todos by clicking on todo by todoEdit action
<br/>

**FrontEnd changes<br/>**

 - Styling added with bootstrap and react-bootstrap for all components
 - Regular components without redux removed from display 
 - Added just do it shia img for logo
 - Added date and time (clock)component
 - imported google font for date and time
 - Todos data persistence added by using localstorage
 - dark mode added
 - Media queries added for different screen sizes
 - Made component where it takes data from news api and display them in Reactbootstrap cards, but might remove this or only display with user interaction.
 - added favicon for the tab
 - tab name changed from default react app >Just Do It




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Thanks for checking it out and have a good one

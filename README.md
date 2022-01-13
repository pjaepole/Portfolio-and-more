
### About the Project
This is my personal project for Todo list app.<br/>
I know this is the most common project you see online for developer to do and I also have seen a lot of videos about the to-do list,<br/>
but I wanted to make it personal by adding functionality that "I" think will be useful to the user that was not in the tutorials online.

### Deployment

- Deployed with vercel: [Link to Website](https://todo-app-ten-smoky.vercel.app/)
 <p align="center">
<img  src="https://user-images.githubusercontent.com/87157585/147978196-85b9cf18-bd01-4f3f-9b61-a06c8cbc45d3.png" width="500">
</p>
 
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
  - can now toggle between nightmode/lightmode
  - added timer functionality when clicked on just do it shia img
<br/>

**FrontEnd changes<br/>**

 - Styling added with bootstrap and react-bootstrap for all components
 - Regular components without redux removed from display 
 - Added just do it shia img for logo
 - Added date and time (clock)component
 - imported google font for date and time
 - Todos data persistence added by using localstorage
 - dark mode added
   - <img  src="https://user-images.githubusercontent.com/87157585/147982392-b4db25ac-2e87-437d-84c1-74791f3837ed.gif" width="300">

 - Media queries added for different screen sizes
 - Made component where it takes data from news api and display them in Reactbootstrap cards, but might remove this or only display with user interaction.
 - added favicon for the tab
 - tab name changed from default react app >Just Do It
 - timer function added, when you click just do it shia img it mounts timer component where clock and date was supposed to be
   - <img  src="https://user-images.githubusercontent.com/87157585/148712489-bd3ddb3c-a978-4fd7-8a0c-c7e0780bf84e.gif" width="300">


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Thanks for checking it out and have a good one

Temporarlity on leave for onboarding with school project 1/11/2021
Still onboarding, looking over docs about ant design and okta, code base looks nothing like the project I am used to 1/12/2021

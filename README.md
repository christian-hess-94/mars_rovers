# How to install and run

1. Install NodeJS and yarn
1. Run the "yarn" command to install dependencies
1. After the installation is finished, run "yarn start" to run the project on port 3000

## Github Page

[Click here](https://christian-hess-94.github.io/mars_rovers/) to check this project running in it's Github Page.

## Explanation

- This project creates and sends rovers through a grid that represents the surface of Mars.
- The rovers recieve commands based on the letter M (move) L (turn left) and R(turn right).
- The grid represents the rover's position via a red dot.
- You can create multiple rovers and send them all at the same time.
- The status panel below the inputs shows the status, position and the direction all rovers are facing.
- There is an out of bounds detection feature, **but it's disabled meaning the rovers can exit and re-enter the grid at will (this was done due to one of the examples aparently doing this)**
  - When this feature is enabled, all invalid **Move** commands are simply skipped.
  - To re-add this feature, uncomment the following lines inside the `src/context/rovers.context.tsx` file:
    - line 2
    - line 69
    - lines 120 -> 122
    - lines 126 -> 128
    - lines 132 -> 134
    - lines 138 -> 140

The project uses the ContextAPI to all the values that are shared in the entire application. There are two contexts:

- One for the Grid, which stores it's size and logic for creating it
- One for the Rovers which stores the array of rovers aswell as calculates how they move inside the grid

All styles and components were custom made using styled-components. The project uses flexbox for positioning.
The Grid itself is built by looking at the grid matrix stored inside the GridContext. All dots are positioned using flexbox aswell.

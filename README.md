# sudoku-solver

### 1/8/22

Coming back to this after a while. Wrote tests for a reducer a while back, and now doing a bit more integrated tests. Will use redux-actions-assertions for these and then use RTL for E2E.

Also update - I got a job offer! Still have a lot to learn so going through this a bit more.

Had an interesting day figuring out the tests. Redux-actions-assertions doesn't seem to work with RTL and while I can use Jest, I'll need to setup the config. However, it's an implementation detail in the end, and I need to focus on app functionlity rather than the implementation details.

Need to refactor a few things now. First, the slider needs to be changed easily. Time to migrate away from RC Slider. Next, I need to design the various test cases.

### 11/26/21

I turned 27 today. Can't believe it! Today I learned that I didn't need to separately install Jest and that it comes built in with RTL! Time to write some tests.

### 11/17/21

Another pause. Organized and styled the components a bit better

### 11/07/21

After a small hiatus, I'm back to work on this! Mobile responsive design is complete, with a couple of small snags which will be resolved soon. Next, will look to refactor components to make them a bit more organized and will also add some unit tests. Thinking both snapshot and integration testing. Unit testing with Redux will be a good thing to learn.

### 10/26/21

Made some decently consistent progress over the last few weeks! Got the solver visualizer working and even got a slider to control the solve speed. Now onto styling and making sure it is responsive across all device sizes. Looking forward to the next steps with it!

### 10/6/21

One month later, I'm picking up this project again. The algorithm is done and solved a similar problem on AlgoExpert recently. I'm going to initiate the solve as an async action using Redux Thunk. Let's see how it goes!

### 9/6/21

As someone who enjoyed doing Sudoku puzzles growing up, I was intrigued on how to solve a Sudoku puzzle via code. I decided to create this project to deepen my own understanding of recursion and backtracking algorithms and to hone my front-end skills.

## Features

### Completed

- Grid Component
- Redux - Actions, Reducers, etc.
- Solve Visualizer
- Puzzles Setup
- Speed Control
- Responsive Styling
- Refactor Components
  - Move cell/box to a different component
  - Move control panel into a new component

### Backlog

- Refactor Components
  - Provide grid as an input to the Sudoku Grid component
- Unit Tests
- Flatten Sudoku Grid State
- Overall Styling and Color
- Sudoku Grid Generator
- Other Solving Algorithms
  - Crook's Algo
  - Simulated Annealing
  - Other...

## Topics to Write About

- Sudoku Grid State Management - Flatten the 2D array
- RC Slider Styling
- React + Redux Unit Testing

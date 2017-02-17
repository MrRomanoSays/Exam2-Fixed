## Exam 2 Instructions

- Fork this repo.
- Clone _your fork_.  Do not clone the original repo.
- Commit and push your answers to your fork.  
- Complete all 6 test questions. Use ramda and functional programming as much as possible.
- Complete each test question within the designated file:  **1.js**,  **2.js**, etc.
- The data for the exam is located in **data.js**.
- Each test question file leverages the data within **data.js** file by requiring the data as a node module.
- The data can be reviewed in a web browser via the following url:

  ```
  http://api.wunderground.com/api/c88ea0ce3f39121f/hourly10day/q/MT/Bozeman.json
  ```
- At 1 p.m., send Trip a private slack message with the url of your fork.


## Extra Credit

Build a RESTful web api that manages the colors of the rainbow.  Include the following endpoints:

- `GET \colors`           -- Returns an array of all the colors
- `GET \color\:name`      -- Returns a specific color
- `POST \colors`          -- Creates a color   
- `DELETE \colors\:name`  -- Deletes a color

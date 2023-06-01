
# Project Overview

## Sprint 2

(![Alt text](src/assets/Logo/logo.svg))

Feedback has come in from the team at BrainFlix and the prototype looks good so far! For this next sprint, they have provided a mock API that will provide some hard-coded movie data that you can use to start building out the functionality of your front-end application. You will also be required to add a second page to the site that will be used for adding new video content to the site.

You will need to leverage your HTML, CSS, and React skills to enhance what you built-in Sprint 1.

To submit this deliverable, ensure you merge your develop branch with the main branch. Submit the link to your GitHub repository in Synapse before the submission deadline.


### Back-End API
***

The [API Documentation](https://project-2-api.herokuapp.com "The API Documentation").
Review the documentation to gain an understanding of how the API works.
Postman is a web client that makes testing APIs simple. You can use it to test the provided back-end API before writing any code.
When communicating with the API, you will need to supply an API key in order to authenticate yourself. Instructions for how to work with the API can be found at the API documentation link above.


### Functional Requirements
___

1. Clicking the BrainFlix Logo must link back to the home page (the page with the default video - which will be the first video in the side-videos list).

2. There must be 3 routes:
    - Home/Video Player Page for displaying the details of a video.
    - The Video Upload Page.
    - A route that will load the video with the provided video id to be displayed using the Video Player Page.

3. Clicking on a video in the “Next Video” list must go to the Video Details Page for the selected video via routing and display all the information for the video such as (likes, views, author, comments, etc).

4. Clicking on the “Upload” button must link to the Video Upload Page.

## Visual Design Requirements
___

The site must be responsive at and between breakpoints. It must closely resemble the mockups in the design package.

## Main Video Page
___

1. Home Page and Video Details Page should use the same Page Component, and use two separate routes, one for home and the other for a selected video. Think of a unique property of a video object that you could incorporate into your route definition.

2. For the Home Page, the video that should be displayed is the first video within the array of videos.

3. For the Video Details Page, the video that should be displayed is the selected video within the array of videos.

4. You must use the useEffect hook as well as the useParams hook from react-router to determine when to update the main-video data.

5. Clicking on a video thumb in the side-videos section should update the URL. Do not use a click handler to update state for this scenario. This means you need to refactor Sprint 1 functionality to utilize the React Router for this Sprint.
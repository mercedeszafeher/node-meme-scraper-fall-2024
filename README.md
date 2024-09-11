# Node.js Meme Scraper fall 2024

This project is a Command Line Interface (CLI) application that scrapes the current version of the website [memegen-link-examples](https://memegen-link-examples-upleveled.netlify.app/) and saves the first 10 images into a folder called `memes` within the project directory.

## Features

- Scrapes the first 10 images from the specified website.
- Saves images in the `memes` folder.
- Names images using a leading-zero format (e.g., `01.jpg`, `02.jpg`, etc.).
- Ensures that meme images are ignored in Git by using a `.gitignore` file.
- Can be run multiple times without throwing errors.


## TODOs

- [ ] Clone the repository
- [ ] Create a repository
- [ ] Create a readme
- [ ] Set up ESLint config
- [ ] Create a .gitignore file and ignore the images by adding memes
- [ ] Create the memes folder
- [ ] Connect to https://memegen-link-examples-upleveled.netlify.app/
- [ ] Research methods to make request in Node.js
  - [ ] should we use a fetch request?
  - [ ] is this the same as connecting?
- [ ] Create a variable with the html string from the website
- [ ] From the html, extract all of the img src attributes (array of strings = array of urls)
- [ ] Limit the array of urls to the first 10 (maybe this can be done with the previous step)
- [ ] Loop over each of the first 10 URLs in the array
  - [ ] Request the image URL
  - [ ] Save the image data in a variable
  - [ ] Create the file name with the leading zero
  - [ ] Create the file with the file name
  - [ ] Put the image data inside of the file
- [ ] Test that the program runs multiple times without errors
      
## Stretch goals:

- [ ] Make the application create your own custom meme (eg. node index.js hello karl bender would download an image with the top text of "hello", the bottom text of "karl", with the meme image of Bender)
- [ ] Add a nice progress indicator (either messages or a progress bar)

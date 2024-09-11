# Node.js Meme Scraper fall 2024

This project is a Command Line Interface (CLI) application that scrapes the current version of the website [memegen-link-examples](https://memegen-link-examples-upleveled.netlify.app/) and saves the first 10 images into a folder called `memes` within the project directory.

## Features

- Scrapes the first 10 images from the specified website.
- Saves images in the `memes` folder.
- Names images using a leading-zero format (e.g., `01.jpg`, `02.jpg`, etc.).
- Ensures that meme images are ignored in Git by using a `.gitignore` file.
- Can be run multiple times without throwing errors.

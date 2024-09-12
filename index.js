import * as cheerio from 'cheerio';
import fs from 'fs';
import fetch from 'node-fetch';

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const html = await response.text(); //Convert the response to text (HTML)

const loadHtml = cheerio.load(html); // Load HTML into cheerio
const imgUrls = []; // creating an empty array for IMG URL´s

loadHtml('img').each(function (index, img) {
  if (index < 10) {
    const imgUrl = loadHtml(img).attr('src');
    imgUrls.push(imgUrl);
  }
});

console.log(imgUrls);

// loop over each of the first 10 URLs in the array
async function downloadImg() {
  for (let i = 0; i < imgUrls.length; i++) {
    const imgUrl = imgUrls[i]; // Getting the img URL from the array
    const imgResponse = await fetch(imgUrl); // Fetching the img data
  }
}

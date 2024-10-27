import puppeteer from 'puppeteer';
import fs from 'node:fs/promises';


const htmlString = await fs.readFile('./portable-bluetooth-speaker-with-curl.html','utf8')

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.setContent(htmlString,{waitUntil:'domcontentloaded'})


const price= await page.evaluate ( () => {
    return document.querySelector('.product_price')?.textContent?.trim()

})

// Format and log the price
console.log(JSON.stringify({ price }, null, 2));

await browser.close();
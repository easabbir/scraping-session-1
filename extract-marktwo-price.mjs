import puppeteer from 'puppeteer';
import fs from 'node:fs/promises';


const htmlString = await fs.readFile('./portable-bluetooth-speaker-with-curl.html','utf8')

const browser = await puppeteer.launch({headless:true});
const page = await browser.newPage();

await page.goto("https://www.studioneat.com/products/marktwo", {waitUntil:'domcontentloaded',timeout: 600000})

const price= await page.evaluate ( () => {
    const priceElement = document.querySelector('.price-item.price-item--regular');
    return priceElement ? priceElement.textContent.trim() : 'Price not found';
    
})

// Format and log the price
console.log(JSON.stringify({ price }, null, 2));

await browser.close();
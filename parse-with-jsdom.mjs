//Write a script that reads one of the .html files downloaded above using JSDOM 
//and prints the price in the format console.log({ price });.
//npm install jsdom

import fs from 'node:fs/promises'
import {JSDOM} from 'jsdom'


const htmlString = await fs.readFile('./portable-bluetooth-speaker-with-curl.html','utf8')

const dom = new JSDOM (htmlString)
const price=(dom.window.document.querySelector('.product_price').textContent.trim())

console.log ({ price })
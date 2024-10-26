// - Write a script that uses the `fetch` API to download the same page and saves it as `portable-bluetooth-speaker-with-fetch.html`.
// - Commit both the `.mjs` script and the `.html` file to GitHub.

import fs from 'node:fs/promises'

const htmlString = await  fetch ('https://rt-barberry.myshopify.com/collections/all/products/portable-bluetooth-speaker')
.then (response => response.text())

fs.writeFile('./portable-bluetooth-speaker-with-fetch.html', htmlString)
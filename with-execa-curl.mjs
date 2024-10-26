//- Write a script that uses `execa` to run `curl` to download the same page and save it as `portable-bluetooth-speaker-with-curl-execa.html`.
//- Commit both the `.mjs` script and the `.html` file to GitHub.

import { $ } from 'execa'

const targetUrl = "https://rt-barberry.myshopify.com/collections/all/products/portable-bluetooth-speaker"
const targetFileName= "portable-bluetooth-speaker-with-curl-execa.html"
await $ `curl ${targetUrl} -o ${targetFileName}`
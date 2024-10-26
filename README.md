# scraping-session-1

## Steps:

### **1. Use `curl` to download a page**

- **Script**: `with-curl.sh`
- Write a shell script that downloads the page `https://rt-barberry.myshopify.com/collections/all/products/portable-bluetooth-speaker` and saves it as `portable-bluetooth-speaker-with-curl.html`
- Commit both the `.sh` script and the downloaded `.html` file to GitHub.

create a file with the extension sh eg with-curl.sh
give executable permission to the file  chmod +x with-curl.sh
and execute the file : ./with-curl.sh

---

### **2. Use `fetch` to download a page**

- **Script**: `with-fetch.mjs`
- Write a script that uses the `fetch` API to download the same page and saves it as `portable-bluetooth-speaker-with-fetch.html`.
- Commit both the `.mjs` script and the `.html` file to GitHub.

---
install node using npm : npm init -y
import fs to write to a file: eg import fs from 'node:fs/promises'

### **3. Use `curl` with `execa`**

- **Script**: `with-execa-curl.mjs`
- Write a script that uses `execa` to run `curl` to download the same page and save it as `portable-bluetooth-speaker-with-curl-execa.html`.
- Commit both the `.mjs` script and the `.html` file to GitHub.

---
import execa: import { $ } from 'execa'



### **4. Parse the file with `JSDOM`**

- **Script**: `parse-with-jsdom.mjs`
- Write a script that reads one of the `.html` files downloaded above using `JSDOM` and prints the price in the format `console.log({ price });`.

install jsdom: npm install jsdom
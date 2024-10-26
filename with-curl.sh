# Write a shell script that downloads the page https://rt-barberry.myshopify.com/collections/all/products/portable-bluetooth-speaker and saves it as portable-bluetooth-speaker-with-curl.html 
# Commit both the .sh script and the downloaded .html file to GitHub.
# curl http://example.com -o myfile.html
# give executable permission to the file  chmod +x with-curl.sh
# ./with-curl.sh

curl https://rt-barberry.myshopify.com/collections/all/products/portable-bluetooth-speaker -o portable-bluetooth-speaker-with-curl.html

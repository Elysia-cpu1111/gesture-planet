#!/bin/bash
export NO_PROXY='*'
export HTTPS_PROXY=''
export HTTP_PROXY=''
export PORT=5173
cd "/mnt/e/path of code/gesture-interactive"
exec node ./node_modules/.bin/vite --host --clearScreen false

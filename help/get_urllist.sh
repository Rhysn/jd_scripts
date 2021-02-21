#!/bin/bash
cd `dirname $0`
num=0
urllist=""
for item in "$@"; do
    path="${item}"
    scripturl=$(cat ${path} | grep -o -E "https:\/\/jdsharedresourcescdn\.azureedge\.net\/jdresource\/.+/.js")
    if [ $num -eq 0 ]
    then
        urllist="${scripturl}"
    else
        urllist="${urllist}\n${scripturl}"
    fi
    let num+=1
done

echo ${urllist} > url.txt
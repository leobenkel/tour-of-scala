#!/bin/bash

kill -9 $(ps aux | grep "jekyll" | grep -v grep | tr -s ' ' | cut -d ' ' -f 2 ) || echo 'No server running'
#!/usr/bin/env bash
echo `PORT=6060 nodemon index.coffee > /dev/null 2>&1 & echo $!` > /var/run/myapp.pid
kill -9 $(cat /var/run/myapp.pid)

#!/bin/bash

title () {
  echo -ne "\e]0;"
  echo -n "$@"
  echo -ne "\a"
}

title Server

cd "server"
node server.js
#!/bin/bash

read -p "Username: " user

cd "client"
node client.js $user
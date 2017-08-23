#!/usr/bin/env bash

read -p "This action will wipe all the data volumes containers Are you sure? (yes/no): " x
if [ "$x" = "yes" ]
then
    docker rm -f $(docker ps -a -q)
    docker volume prune -f 
fi
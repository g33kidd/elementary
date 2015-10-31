#!/bin/sh

# TODO: Add mongodb start script or use gulp to do the same.
# Allows Windows users to run the cms.
export DEBUG=cms:*;
DEBUG=cms:* nodemon --exec babel-node app.js;

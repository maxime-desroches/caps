#!/bin/bash

HERE="`dirname "$0"`"

sudo cp $HERE /opt/caps -r

cd /usr/bin

sudo ln -fs /opt/caps/caps

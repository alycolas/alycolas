#!/bin/sh
 
 ssh-agent zsh
 ssh-add ~/.ssh/alycolas
 ssh -T git@github.com

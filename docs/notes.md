# Technical Notes

## 1. The biggest Docker problem I faced
At first, I got an error saying "error during connect" when trying to run `docker build`. The problem was that Docker Desktop was not running in the background. I solved it by always making sure to open the Docker Desktop application and waiting for the engine to start before typing any commands in the terminal.

## 2. The most important Git/GitHub lesson
I learned the true value of the `.gitignore` and `.dockerignore` files. Before this, I didn't know how to prevent heavy and unnecessary folders (like `node_modules`) from being uploaded. Now I know how to keep my GitHub repository clean and my Docker images small.
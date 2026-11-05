# OS Lab Assignment 2

This is a simple Node.js API containerized with Docker for my Operating Systems lab assignment.

## Project Structure
- `src/`: Contains the Node.js application code.
- `docs/screenshots/`: Contains proof of execution.
- `Dockerfile`: Instructions to build the Docker image.

## Commands Used
Build the image:
`docker build -t task-api .`

Run the container:
`docker run -p 3000:3000 task-api`
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

### How to Test
Open your web browser or Postman and go to:
`http://localhost:3000`
You should see a success response from the application.

### How to Stop the Container and Clean Up
1. Find the running container ID by typing:
   `docker ps`
2. Stop the container using its ID:
   `docker stop <container-id>`
3. (Optional) Remove the stopped container:
   `docker rm <container-id>`
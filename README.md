# OS Lab Assignment 2

This project is a simple Node.js Task API running inside a Docker container. It returns a JSON list of tasks, demonstrating how to containerize backend services.

## Project Structure
- `src/`: Contains the Node.js application code.
- `docs/screenshots/`: Contains proof of execution.
- `Dockerfile`: Instructions to build the Docker image.

## Tech Stack
- **Node.js**: Backend logic to serve the JSON Task API.
- **Docker**: Containerization to run the application isolated and reliably.

## Configuration Notes
- **Port**: The application listens on port `3000`. 
- **Environment Variables**: No external `.env` variables are required for this project.

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
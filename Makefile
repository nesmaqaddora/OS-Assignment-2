build:
	docker build -t task-api .

run:
	docker run -p 3000:3000 -d task-api

stop:
	docker stop $$(docker ps -q --filter ancestor=task-api)
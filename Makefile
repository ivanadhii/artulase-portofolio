rebuild:
	docker compose -f docker-compose.prod.yml down && docker compose -f docker-compose.prod.yml up -d --build

down:
	docker compose -f docker-compose.prod.yml down

logs:
	docker logs -f artulase-web
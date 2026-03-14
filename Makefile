-include .env
export

rebuild:
	docker compose -f docker-compose.prod.yml down && docker compose -f docker-compose.prod.yml up -d --build

down:
	docker compose -f docker-compose.prod.yml down

logs:
	docker logs -f artulase-web

deploy-cms:
	@if [ -z "$(SANITY_AUTH_TOKEN)" ]; then \
		echo "Error: SANITY_AUTH_TOKEN tidak ditemukan. Tambahkan ke file .env"; \
		exit 1; \
	fi
	docker build -f Dockerfile.cms --build-arg SANITY_AUTH_TOKEN=$(SANITY_AUTH_TOKEN) -t artulase-cms .
	docker run --rm artulase-cms

push:
	@msg=$(if $(m),$(m),"update"); \
	git status && git add . && git commit -m "$$msg" && git push

pull:
	git status && git pull && $(MAKE) rebuild

get-schema:
	@if [ -z "$(SANITY_AUTH_TOKEN)" ]; then \
		echo "Error: SANITY_AUTH_TOKEN tidak ditemukan. Tambahkan ke file .env"; \
		exit 1; \
	fi
	docker build -f Dockerfile.cms --build-arg SANITY_AUTH_TOKEN=$(SANITY_AUTH_TOKEN) -t artulase-cms .
	docker run --rm artulase-cms npx sanity schema extract --path /dev/stdout 2>/dev/null
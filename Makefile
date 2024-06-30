.DEFAULT_GOAL := help

EXAMPLE ?= not-found

SCHEMA_PATH ?= ./prisma/e-commerce/schema.prisma
# Available commands and their descriptions

help:
	@echo ""
	@echo "Usage: make [command] [args]"
	@echo ""
	@echo "Available commands:"
	@echo "  example        Download example project"
	@echo ""
	@echo "  help           Show this help message"
	@echo "  version        Show the current version"
	@echo ""

# Command to install dependencies
install:
	@echo "Installing dependencies..."
	pnpm prisma format --schema=./prisma/e-commerce/schema.prisma
	pnpm prisma validate --schema=./prisma/e-commerce/schema.prisma

# Command to install dependencies
example:
	@if [ -f $(EXAMPLE) ]; then \
		echo "Installing dependencies..."; \
		# pnpm prisma format --schema=$(SCHEMA_PATH); \
		# pnpm prisma validate --schema=$(SCHEMA_PATH); \
	else \
		echo "Schema file $(SCHEMA_PATH) not found. Skipping..."; \
	fi
	@echo "Installing dependencies..."


	# @curl https://codeload.github.com/rodrigo-work/${REPOSITORY}/tar.gz/main | tar -xz --strip=1 ${REPOSITORY}-main/01

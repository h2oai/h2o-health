all: setup ## Install dependencies

setup: ## Install packages
	python3 -m venv venv
	./venv/bin/python -m pip install --upgrade pip
	./venv/bin/python -m pip install -r requirements.txt


run: ## Run the doc locally 
	./venv/bin/mkdocs serve 


build: ## Build HTML files 
	./venv/bin/mkdocs build 
	

update: ## Update packages
	python3 -m venv venv
	./venv/bin/python -m pip install --upgrade -r requirements.txt
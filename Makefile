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

setup-doc: ## Install documentation dependencies
	cd docs && npm install package.json
	cd docs && npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @material-ui/core
	cd docs && npm install react-player
	cd docs && npm install @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/theme-mermaid@latest @docusaurus/module-type-aliases@latest

run-doc: ## Run the doc locally
	cd docs && npm start


build-doc-locally: ## Bundles your website into static files for production 
	cd docs && npm run build


serve-doc-locally: ## Serves the built website locally 
	cd docs && npm run serve
    
version-doc: ## Cut a new version of the documentation
	cd docs && npm run docusaurus docs:version $(DOC_VERSION)




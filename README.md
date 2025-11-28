# HTML/CSS/Typescript Starter Template

This is a simple boilerplate template for projects using basic HTML, CSS, and Typescript. It includes a few useful npm scripts, prettier, and eslint.

## Installation
This template is intended to be used with `cookiecutter`, which is a command-line Python package that creates projects from templates. To use it, you have two options:

1. **Use Cookiecutter within the repo**:
    - Clone this repository
    - Install cookiecutter from requirements.txt, probably in a virtual environment:
        ```bash
        pip install -r requirements.txt
        ```
    - Change to the directory where you want to make the project
    - Run cookiecutter pointing to the cloned repo:
        ```bash
        cookiecutter /path/to/cloned/repo
        ```

2. **Use Cookiecutter without cloning the repo**:
    - Install cookiecutter globally if you haven't already:
        ```bash
        pip install cookiecutter
        ```
    - Change to the directory where you want to make the project
    - Run cookiecutter pointing to the GitHub URL of this repo:
        ```bash
        cookiecutter https://github.com/michaelzhan1/raw-typescript-template.git
        ```
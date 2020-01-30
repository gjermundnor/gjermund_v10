#!/usr/bin/env bash

docker-compose run web bash -c "apt-get update; apt-get install -y postgresql-client; pipenv run python manage.py dbshell;";

# rsync -avz /Users/gjermund/Documents/Personlig/Utvikling/Prosjekter/Gjermundnor/v.10/gjermundnor_v10/build root@146.185.132.103:/var/www/public

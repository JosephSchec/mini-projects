---
layout: '../../layouts/BlogLayout.astro'
title: Setup Django
description: Django basic geting started
---

## Install django

1. `pip install dgango`
2. `django-admin startproject {PROJECT_NAME}`
3. `cd {PROJECT_NAME} & python manage.py startapp {APP_NAME} `

In `settings.py` add `{APP_NAME}` to the `INSTALLED_APP` tuple

### Routes

1. create a `urls.py` file with the foillow:

```
urlpatterns = [
   path("",views.home,name="home")
]
```

2.  in the `project_directory/urls.py` add `path("" , include("{APP_NAME}.urls"))` the empty string refers to the start of the route
    so `/admin` refers to `.../admin/{ROUTE DEFINED IN THE APP}`

### Templates

1. Templates are called using the `render(requset,"filename")`
2. Templates only exist in `templates` directory
3. Templates are based on Jinja file renderings by default

### Migrations

1. create the model in `models.py`
2. add the model to `admin.py` by importing your model and calling `admin.site.register(YOUR_MODEL)`
3. run `python manage.py makemigrations` then `python manage.py migrate`

### Python db

1. `python manage.py createsuperuser` (you can ignore email)
2. run server then add `/admin`

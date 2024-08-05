---
inProgress: false
title: "ORM ou pas ORM ?"
description: "<h2>Qu'est-ce qu'un ORM ?</h2><br><p>Pour débuter, un ORM, ou Object-Relational Mapping (ou Modèle Objet-Relationnel en français), est une technique de programmation qui permet de convertir des données entre des systèmes de types incompatibles en utilisant des langages de programmation orientés objet. En termes simples, un ORM facilite l'interaction entre une base de données relationnelle et le code d'une application en créant un \"pont\" entre les tables de la base de données et les objets dans le code. Cela permet aux développeurs de manipuler des bases de données en utilisant des concepts et des structures propres à la programmation orientée objet, sans avoir à écrire directement des requêtes SQL. Les ORMs comme Hibernate en Java, Django ORM en Python, ou Entity Framework en C# permettent de simplifier et d'accélérer le développement en automatisant la gestion des données et en réduisant les risques d'erreurs liés à l'écriture manuelle de requêtes SQL.</p><br><img alt=\"orm-schema\" src=\"https://www.developpez.net/forums/attachments/p474863d1/a/a/a\"><p style=\"font-style: italic;\">Schéma de fonctionnement d'un ORM</p><br><h2>SQLAlchemy...</h2><br><p>J'apprécie particulièrement le principe de migration offert par des ORMs comme Prisma en JavaScript/TypeScript, qui facilite grandement la gestion des changements de schéma de la base de données au fil du développement. Les migrations permettent de versionner les modifications, de les appliquer de manière ordonnée et de conserver un historique des transformations apportées à la structure de la base de données. Cependant, cette fonctionnalité intégrée et simplifiée manque cruellement dans SQLAlchemy, l'un des principaux ORMs utilisés en Python. Bien que SQLAlchemy soit puissant et flexible, il nécessite l'utilisation d'outils externes comme Alembic pour gérer les migrations, ce qui peut compliquer le processus et nécessiter une configuration supplémentaire. Cette absence de migrations intégrées peut rendre SQLAlchemy moins pratique pour les développeurs habitués à la commodité offerte par des solutions comme Prisma.</p><br><h2>...ou pas SQLAlchemy ?</h2><br><p>En conclusion, bien que les ORMs offrent de nombreux avantages en termes de productivité et de simplicité, il est important de choisir l'outil le plus adapté aux besoins spécifiques de chaque projet. Si la gestion des migrations est un critère essentiel pour vous, il peut être judicieux de se tourner vers des ORMs comme Prisma qui offrent cette fonctionnalité de manière intégrée et simplifiée. Cependant, si vous recherchez un ORM puissant et flexible, capable de s'adapter à une grande variété de cas d'utilisation, SQLAlchemy reste une excellente option malgré la complexité supplémentaire liée à la gestion des migrations. En fin de compte, j'ai fait le choix de rester sur l'ORM SQLAlchemy qui permet quand même de simplifier les requêtes à la base de donnée.</p>"
img_alt: database
img_src: /img/database.webp
link: /blog/4
tags: ['SQL', 'SQLite', 'ORM', 'SQLAlchemy', 'Automatisation', 'Python']
---
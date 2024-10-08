# Single Page Application with Angular Space Blog

This project was built with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## News API

Used open API to get article names and descriptions from [Spaceflight News API](https://spaceflightnewsapi.net/)

## Home page contains:

1. Cards with article titles and descriptions for 100 characters. The user can click on the card to go to an article page that contains the title and full description of the selected article.

2. A field to filter by keyword. The user enters keywords into the field and the system displays all articles containing at least one of the keywords in the name or/and description.

The priority of fields: (1) names; and (2) description. The article with one match in the name is higher than the article with one match in the description.

The matched keywords are highlighted with yellow color.
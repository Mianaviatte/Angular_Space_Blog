import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { ArticleComponent } from '../app/article/article.component'

export const routes: Routes = [
      {
        path: '',
        children: [
          {
            path: '',
            component: HomeComponent,
          },
          {
            path: ':id',
            component: ArticleComponent,
          },
        ],
      },
];

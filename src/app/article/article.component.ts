import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ActivatedRoute } from '@angular/router';
import {RouterLink}  from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [ MatCardModule, MatIconModule, MatProgressBarModule, RouterLink ],
  providers: [ApiService],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {

  loading = false;

  article!: any;

  constructor(
    private apiService: ApiService, 
    private route: ActivatedRoute, 
  ) {
  }

 ngOnInit(): void {
  this.getItemId(this.route.snapshot.params['id']);
  console.log('route is ', this.route.snapshot.params['id']);
 }

 getItemId(id: number ): void {
  this.loading = true;
  this.apiService.getId(id).subscribe( result=>{
    this.article = result;
    this.loading = false;
    console.log('result is ', result, id);
  });
 }

}

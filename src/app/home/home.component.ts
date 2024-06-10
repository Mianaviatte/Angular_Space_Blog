import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpClientModule } from "@angular/common/http";
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 
import {RouterLink}  from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatCardModule, RouterLink],
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  articles!: any;

  constructor(private apiService: ApiService) {
    this.apiService.get().subscribe(result=>{
      this.articles=result;
      console.log('result is ', result);
    });
  }
}

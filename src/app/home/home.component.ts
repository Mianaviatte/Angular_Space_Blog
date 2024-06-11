import { Component, OnInit } from '@angular/core';
import { ApiService, ClientOptions } from '../service/api.service';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterLink}  from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, RouterLink, MatIconModule, MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule],
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  value = '';

  articles!: any;

  constructor(private apiService: ApiService) {
  }

 ngOnInit(): void {
  this.getItems();
 }

 getItems(search = ''): void {
   const options: ClientOptions = {
     ...search && {
      params: {
        search,
      }
     }
   }

   this.apiService.get(options).subscribe( result=>{
     this.articles = result;
     console.log('result is ', result, options);
   });
  }
}

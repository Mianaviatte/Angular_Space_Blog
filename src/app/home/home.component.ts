import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  articles!: any[];

  constructor(private apiService: ApiService) {
    this.apiService.get().subscribe(result=>this.articles=result);
  }
}

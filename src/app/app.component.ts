import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestAPIService } from './testapi.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'openapi-fetch-angular-example';

  constructor(private testApi: TestAPIService) {}

  async ngOnInit(): Promise<void> {
    const { data, error } = await this.testApi.post('/pet/findByStatus');

    console.log(data, error);
  }
}

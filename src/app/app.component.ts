import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.httpClient.get('https://api.fashbash.co/api/feed?page=0')
    .subscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimeService } from './services/time.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  time: string = '';

  constructor(private timeService: TimeService) {}
  ngOnInit(): void {
    this.timeService.getCurrentTime().subscribe({
      next: (data) => this.time = data.time,
      error: (err) => console.error('API call failed', err)
    });
  }
  title = 'swa-angular';
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Automated Testing Demo';
  points = 1;

  public plus1(): void {
    this.points++;
  }

  public reset(): void {
    this.points = 0;
  }
}

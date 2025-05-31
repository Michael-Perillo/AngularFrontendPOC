import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class App {
  protected title = 'app';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent } from './header/header.component';
import { NavComponent } from "./nav/nav.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    
  constructor(private titleService: Title ){
    this.titleService.setTitle('Satheesh Vykuntapu- Home');
  }
}

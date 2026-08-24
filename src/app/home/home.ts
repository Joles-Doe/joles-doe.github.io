import { Component } from '@angular/core';

import { Introduction } from '../introduction/introduction';

@Component({
  imports: [
    Introduction
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}

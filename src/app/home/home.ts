import { Component } from '@angular/core';

import { Introduction } from '../introduction/introduction';
import { Projects } from '../projects/projects';
import { About } from '../about/about';
import { Contact } from '../contact/contact';

@Component({
  imports: [
    Introduction,
    Projects,
    About,
    Contact,
  ],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}

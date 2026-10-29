import { Routes } from '@angular/router';

import { Projects } from './projects/projects';
import { Home } from './home/home';
import { DesertedDuo } from './projects/deserted-duo/deserted-duo';
import { Tapper } from './projects/tapper/tapper';
import { Untethered } from './projects/untethered/untethered';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'projects/tapper',
        component: Tapper
    },
    {
        path: 'projects/deserted-duo',
        component: DesertedDuo
    },
    {
        path: 'projects/untethered',
        component: Untethered
    },
    {
        path: 'projects',
        component: Projects
    },
];

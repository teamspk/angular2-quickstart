import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <my-heroes></my-heroes>
        <nav>
          <a [routerLink]="['Heroes']">Heroes</a>
          <a [routerLink]="['Dashboard']">Dashboard</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService, ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/heroes', name: 'Heroes', component: HeroesComponent }
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true }
    { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent }
])

export class AppComponent {
    public title = 'Tour of Heroes!';
}

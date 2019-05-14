import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    console.log('HeroesComponent: initialized');
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    const start = Date.now();
    this.delay(1000)
      .then(() => {
        this.heroService
        .getHeroes()
        .subscribe(heroes => this.heroes = heroes);
        console.log('HeroesComponent: fetched list of heroes. Elapsed', Date.now() - start, 'ms');
      });
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => {});
  }
}

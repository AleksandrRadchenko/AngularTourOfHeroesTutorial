import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.add('HeroesComponent: initialized');
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: selected hero ' + hero.name);
  }

  getHeroes(): void {
    this.messageService.add('HeroesComponent: start fetching heroes');
    const start = Date.now();
    this.delay(1000)
      .then(() => {
        this.heroService
        .getHeroes()
        .subscribe(heroes => this.heroes = heroes);
        this.messageService.add('HeroesComponent: fetched list of heroes. Elapsed ' + (Date.now() - start) + ' ms');
      });
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => {});
  }
}

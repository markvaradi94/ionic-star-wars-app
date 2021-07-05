import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets: Observable<any>;

  constructor(private router: Router,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.planets = this.apiService.getPlanets();
  }

  openDetails(planet) {
    const split = planet.url.split('/');
    const planetId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/planets/${planetId}`);
  }
}

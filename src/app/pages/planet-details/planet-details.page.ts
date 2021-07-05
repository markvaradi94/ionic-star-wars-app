import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.page.html',
  styleUrls: ['./planet-details.page.scss'],
})
export class PlanetDetailsPage implements OnInit {

  planet: any;

  constructor(private activatedRoute: ActivatedRoute,
              private apiService: ApiService) {
  }

  ngOnInit() {
    const planetId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getPlanet(planetId).subscribe(result => {
      this.planet = result;
    });
  }

}

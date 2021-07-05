import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films: Observable<any>;

  constructor(private router: Router,
              private navController: NavController,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.films = this.apiService.getFilms();
  }

  openDetails(film) {
    const split = film.url.split('/');
    const filmId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }

  goToPlanets() {
    this.navController.navigateRoot('/tabs/planets');
  }
}

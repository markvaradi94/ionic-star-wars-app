import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FavouriteService } from '../../services/favourite.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  filmId: string = null;
  film: any;
  isFavorite = false;

  constructor(private activatedRoute: ActivatedRoute,
              private apiService: ApiService,
              private emailComposer: EmailComposer,
              private favouriteService: FavouriteService) {
  }

  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.getFilm(this.filmId).subscribe(result => {
      this.film = result;
    });

    this.favouriteService.isFavorite(this.filmId).then(isFav => {
      this.isFavorite = isFav;
    });
  }

  favoriteFilm() {
    this.favouriteService.favoriteFilm(this.filmId).then(() => {
      this.isFavorite = true;
    });
  }

  unfavoriteFilm() {
    this.favouriteService.unfavoriteFilm(this.filmId).then(() => {
      this.isFavorite = false;
    });
  }

  shareFilm() {
    const email = {
      to: 'mark.varadi03@gmail.com',
      subject: 'Watch this SW movie: ' + this.film.title,
      body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
      isHtml: true
    };

    this.emailComposer.open(email);
  }
}

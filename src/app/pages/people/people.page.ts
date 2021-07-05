import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: Observable<any>;

  constructor(private router: Router,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.people = this.apiService.getPeople();
  }

  openDetails(person) {
    const split = person.url.split('/');
    const personId = split[split.length - 2];
    this.router.navigateByUrl(`/tabs/people/${personId}`);
  }

}

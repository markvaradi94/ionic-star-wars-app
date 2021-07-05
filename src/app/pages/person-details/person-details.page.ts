import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.page.html',
  styleUrls: ['./person-details.page.scss'],
})
export class PersonDetailsPage implements OnInit {

  person: any;

  constructor(private activatedRoute: ActivatedRoute,
              private apiService: ApiService) { }

  ngOnInit() {
    const personId = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getPerson(personId).subscribe(result => {
      this.person = result;
    });
  }

}

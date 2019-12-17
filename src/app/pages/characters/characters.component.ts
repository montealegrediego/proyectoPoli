import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { QUERYS } from 'src/app/const/querys';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters: any = [];

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.api.comsumeQuery(QUERYS.CHARACTERS).valueChanges.subscribe(
      ({data}) => {
        this.characters = data.characters.results;
      }
    );
  }

}

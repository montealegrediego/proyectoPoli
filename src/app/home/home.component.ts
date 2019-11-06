import { Component, OnInit } from '@angular/core';
import { Members, IMembers } from '../models/member-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  members: IMembers[];

  constructor() {
    this.members = Members;
  }

  ngOnInit() {

  }

}

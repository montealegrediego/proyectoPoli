import { Component, OnInit } from '@angular/core';
import { IMembers } from '../../models/member-model';
import { Members } from '../../const/members';

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

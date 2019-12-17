import { Component, OnInit } from '@angular/core';
import { IMembers } from '../../models/member-model';
import { Members } from '../../const/members';
import { Router } from '@angular/router';
import { URLS } from 'src/app/const/urls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  members: IMembers[];

  constructor(
    private router: Router,
  ) {
    this.members = Members;
  }

  ngOnInit() {

  }

  goToPincipalMenu() {
    this.router.navigate([URLS.PRINCIPAL_MENU]);
  }

}

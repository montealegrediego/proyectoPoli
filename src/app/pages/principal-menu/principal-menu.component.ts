import { Component, OnInit } from '@angular/core';
import { IPrincipalMenuItem } from 'src/app/models/principal-menu.interface';
import { PrincipalMenuItems } from 'src/app/const/principal-menu';
import { Router } from '@angular/router';
import { URLS } from 'src/app/const/urls';

@Component({
  selector: 'app-principal-menu',
  templateUrl: './principal-menu.component.html',
  styleUrls: ['./principal-menu.component.scss']
})
export class PrincipalMenuComponent implements OnInit {
  items: IPrincipalMenuItem[];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.items = Object.assign([], PrincipalMenuItems);
  }

  goToSubMenu(item: IPrincipalMenuItem) {
    this.router.navigate([URLS.SUB_MENU]);
  }

}

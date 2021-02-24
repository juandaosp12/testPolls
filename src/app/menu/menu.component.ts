import { Component, OnInit } from '@angular/core';

import { faSearch, faBars, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faSearch = faSearch
  faBars = faBars
  faChevronCircleUp = faChevronCircleUp

  mobileMenuDisplayed = false
  toggleMenu = () => {
    this.mobileMenuDisplayed = !this.mobileMenuDisplayed
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebookSquare = faFacebookSquare
  faTwitterSquare = faTwitterSquare

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-poll-box',
  templateUrl: './poll-box.component.html',
  styleUrls: ['./poll-box.component.css']
})
export class PollBoxComponent implements OnInit {
  faWikipediaW=faWikipediaW
  faThumbsUp = faThumbsUp
  faThumbsDown = faThumbsDown
  constructor() { }

  ngOnInit(): void {
  }

}

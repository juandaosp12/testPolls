import { Component, OnInit } from '@angular/core';

import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { POLLS } from './mock-polls';
import { Poll } from './poll'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  faThumbsUp = faThumbsUp
  faThumbsDown = faThumbsDown
  polls = POLLS
  selectThumb = (poll:any, thumb:String) => {
    switch(thumb) {
      case 'up':
        poll.selectedUp = true
        poll.selectedDown = false
        poll.showNotSelectedError = false
        break
      case 'down':
        poll.selectedUp = false
        poll.selectedDown = true
        poll.showNotSelectedError = false
        break
    }
  }
  vote = (poll:any) => {
    if(poll.selectedDown || poll.selectedUp) {
      poll.voted = true
      if(poll.selectedDown) {
        poll.votesDown = poll.votesDown + 1
      } else {
        poll.votesUp = poll.votesUp + 1
      }
      poll.selectedDown = false
      poll.selectedUp = false
      poll.showNotSelectedError= false
      let persistObject = {pollId: poll.id, userId: 1, votesDown: poll.votesDown, votesUp: poll.votesUp}
      this.cookieService.set('poll-'+poll.id, JSON.stringify(persistObject))

    } else {
      poll.showNotSelectedError = true
    }
  }
  /*Return de percentage of up and down votes*/
  getVotePercentage = (votesUp:number, votesDown:number) => {
    let totalVotes = votesUp + votesDown
    let percentageUpVotes = votesUp*100 / totalVotes
    let percentageDownVotes = votesDown*100 / totalVotes
    return {up: Math.round((percentageUpVotes + Number.EPSILON) * 10) / 10, down: Math.round((percentageDownVotes + Number.EPSILON) * 10) / 10}
  }

  /*Transform pubdate in 'months' ago*/
  transformPubDate = (pubdate:Date) => {
    let date = new Date(pubdate)
    console.log(new Date().getTime().toString())
    var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    var intervalType;

    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      intervalType = 'year';
    } else {
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        intervalType = 'month';
      } else {
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
          intervalType = 'day';
        } else {
          interval = Math.floor(seconds / 3600);
          if (interval >= 1) {
            intervalType = "hour";
          } else {
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
              intervalType = "minute";
            } else {
              interval = seconds;
              intervalType = "second";
            }
          }
        }
      }
    }

    if (interval > 1 || interval === 0) {
      intervalType += 's';
    }

    return interval + ' ' + intervalType
  };

  constructor(private cookieService: CookieService ) { }

  ngOnInit(): void {
    for(let i=0; i<POLLS.length; i++){
      let persistObject = this.cookieService.get('poll-'+POLLS[i].id)

      if(persistObject){
        console.log('persistObject', persistObject)
        let jsonObject = JSON.parse(persistObject)
        POLLS[i].votesUp = jsonObject.votesUp
        POLLS[i].votesDown = jsonObject.votesDown
      }
    }
  }
}

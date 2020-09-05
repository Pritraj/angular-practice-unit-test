import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-one',
  templateUrl: './sample-one.component.html',
  styleUrls: ['./sample-one.component.scss']
})
export class SampleOneComponent{

  totalVotes = 0;
  upVote(){
    this.totalVotes ++;
  }

  downVote(){
    this.totalVotes --;
  }

}

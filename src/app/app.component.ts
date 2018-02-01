import { Component } from '@angular/core';
import { Icomment } from "./icomment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feedbackapp';
  CommntArr = [];
  comment:Icomment;

formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  var time = date.toTimeString().split(' ')[0].split(':');
  var mid = this.getAMPM((time[0]+24-2)%24);
  return time[0]+':'+time[1]+ ' '+ mid+' '+ day + ' ' + monthNames[monthIndex] + ', ' + year;
}
getAMPM(hours){
 var mid='AM';
    if(hours==0){ hours=12; //At 00 hours we need to show 12 am
    } else if(hours>12){
    hours=hours%12; mid='PM';}
  return mid
}
  agreed = 0;
  Commentreplies = null;
  onVoted(comment: Icomment) {
    this.agreed++;
    comment.Likes++;
  }
  onReplied(reply: Icomment){
    this.Commentreplies = reply;
  }
  onClickReply(reply,comment){
  let timeobj = {
      value :reply.value,
      timeStamp:this.formatDate(new Date()),
    }
    comment.Reply.push(timeobj);
    reply.value = ' ';
  }
  onClickMe(comments){
    let timeobj :Icomment = {
      value :comments.value,
      timeStamp:this.formatDate(new Date()),
      Likes:0,
      Reply:[]
    };
    this.CommntArr.push(timeobj);
    comments.value = ' ';
  }
}


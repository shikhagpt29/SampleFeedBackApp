import { Component } from '@angular/core';
import { Icomment } from "./icomment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  CommntArr = [];
  comment:Icomment ;
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
   var hours = (time[0]+24-2)%24; 
   var mid = this.getAMPM(hours)
  return time[0]+':'+time[1]+ ' '+ mid+' '+ day + ' ' + monthNames[monthIndex] + ', ' + year;
}
getAMPM(hours){
 var mid='AM';
    if(hours==0){ //At 00 hours we need to show 12 am
    hours=12;
    }
    else if(hours>12)
    {
    hours=hours%12;
    mid='PM';
  }
  return mid
}

  onClickMe(value){
    let timeobj :Icomment = {
      value :value,
      timeStamp:this.formatDate(new Date())
    };
     
    this.CommntArr.push(timeobj);
  }
}


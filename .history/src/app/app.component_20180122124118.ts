import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  onClickMe(value){
    
    let CommntArr = [];
    var object ={"comment":value,"tstap":new Date();}
    CommntArr.push(object);
    alert(object);
  }
}


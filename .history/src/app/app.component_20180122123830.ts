import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  onClickMe(value){
    
    var Arr = [];
    var object ={"s":value}
    Arr.push(object);
    alert(object);
  }
}


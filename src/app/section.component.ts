import {Input,Output,EventEmitter,Component} from '@angular/core'
import { Icomment } from "./icomment";

@Component({
    selector:'app-section',
    template:` <ul>{{comment.value}} </ul> 
    <ul>{{comment.timeStamp}} <span *ngIf='comment.Likes' >{{comment.Likes}}person liked this</span>
     <button  class="button" type="submit" (click)="vote(comment)">Like</button> 
     <button class="button"  type="submit" (click)="onReply(comment)">Reply</button> 
     </ul>
      <ul *ngIf= 'comment.Reply'>
      <ul *ngFor ="let reply of comment.Reply"> {{reply.value}} {{reply.timeStamp}}
      </ul>
     </ul>
    `
})
export class SectionComponent{
@Input() comment:Icomment;
@Output() onVoted = new EventEmitter<Icomment>();
@Output() onReplied = new EventEmitter<Icomment>();
 replied = false;
  vote(comment: Icomment) {
    this.onVoted.emit(comment);
  }
  onReply(reply:Icomment){
    this.onReplied.emit(reply);
  }
}
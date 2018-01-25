import {Input,Component} from '@angular/core'

@Component({
    selector:'app-section',
    template:` <ul>{{value}}</ul> <ul>{{timeStamp}}</ul>`
})
export class SectionComponent{
@Input() value : string;
@Input() timeStamp : string;
}
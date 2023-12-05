import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() message: any;

  @Output() clickPosts = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickPosts.emit(this.message.id);
  }

}

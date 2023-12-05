import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  messages: any[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    console.log("init");
    this.dataService.getPosts()
      .subscribe(posts  => {
       this.messages = posts;
      });
  }

  listenClick(id: number){
    console.log("pater:" + id);
  }

}

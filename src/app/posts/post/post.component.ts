import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) { return; }
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}

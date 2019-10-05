import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [];

  constructor() { }

  getPosts() {
    return this.posts;
  }

  addPost(title: string, content: string) {
    const post: Post = {title, content};
    this.posts.push(post);
  }
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsArtigosPage } from './posts-artigos';

@NgModule({
  declarations: [
    PostsArtigosPage,
  ],
  imports: [
    IonicPageModule.forChild(PostsArtigosPage),
  ],
})
export class PostsArtigosPageModule {}

import { Component } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-videos-youtube',
  templateUrl: 'videos-youtube.html'
})
export class VideosYoutubePage {

  channelId: string = 'UCqIk3EgLPCiTRcSM8OmMcJQ';
  maxRes: string = '5';
  googleToken: string = 'AIzaSyDet3u8zzoJWWRA0ugQpk_Ga0Xe5w2wRR0';
  search: string = 'honra';
  posts: any = [];

  constructor(public navCtrl: NavController, public http:Http) {

    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.googleToken + '&channelId=' + this.channelId + '&part=snippet,id&maxResults=20';

    this.http.get(url).map(res=>res.json()).subscribe(data=>{
      this.posts=this.posts.concat(data.items);
      console.log(this.posts);
      console.log(url);
    })
  }

}

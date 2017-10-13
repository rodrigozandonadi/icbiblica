import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostDetailPage} from '../post-detail/post-detail';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-posts-artigos',
  templateUrl: 'posts-artigos.html',
})
export class PostsArtigosPage {

  url: string = 'http://icbiblica.com/wp-json/wp/v2/posts?categories=3';
	items: any;

  constructor(public navCtrl: NavController, private http: Http, private nav: NavController) { }

  ionViewDidEnter() {
		this.http.get( this.url )
	    .map(res => res.json())
	    .subscribe(data => {
	      // we've got back the raw data, now generate the core schedule data
	      // and save the data for later reference
	      this.items = data;
	    });
  }
  
  itemTapped(event, item) {
		this.nav.push(PostDetailPage, {
		  item: item
		});
	}

}

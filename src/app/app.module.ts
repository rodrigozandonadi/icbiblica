import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { PostsArtigosPage } from '../pages/posts-artigos/posts-artigos';
import { PostDetailPage } from '../pages/post-detail/post-detail';
import { VideosYoutubePage } from '../pages/videos-youtube/videos-youtube';
import { PlaylistPage } from '../pages/playlist/playlist';
import { ListPage } from '../pages/list/list';
import { YoutubePipe } from '../pipes/youtube/youtube';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { YtProvider } from '../providers/yt/yt';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PostsArtigosPage,
    PostDetailPage,
    VideosYoutubePage,
    PlaylistPage,
    ListPage,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PostsArtigosPage,
    PostDetailPage,
    VideosYoutubePage,
    PlaylistPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YtProvider,
    YoutubeVideoPlayer
  ]
})
export class AppModule {}

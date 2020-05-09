import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { CaptionedImageComponent } from './captioned-image/captioned-image.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';
import { ResourcesComponent } from './resources/resources.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { examples } from './examples';
import { Workshop0Component } from './workshop0/workshop0.component';
import { Workshop1Component } from './workshop1/workshop1.component';
import { Workshop2Component } from './workshop2/workshop2.component';
import { Workshop3Component } from './workshop3/workshop3.component';
import { Workshop4Component } from './workshop4/workshop4.component';
import { Workshop5Component } from './workshop5/workshop5.component';
import { Workshop6Component } from './workshop6/workshop6.component';
import { Workshop7Component } from './workshop7/workshop7.component';
import { Workshop8Component } from './workshop8/workshop8.component';
import { Workshop9Component } from './workshop9/workshop9.component';

@NgModule({
  declarations: [

    examples.map( example => example.component ),

    AppComponent,
    AboutComponent,
    CaptionedImageComponent,
    MainMenuComponent,
    MediaObjectComponent,
    PlayingCardComponent,
    ResourcesComponent,
    VideoListComponent,
    VideoPlayerComponent,
    VideoThumbnailComponent,
    WelcomeComponent,
    Workshop0Component,
    Workshop1Component,
    Workshop2Component,
    Workshop3Component,
    Workshop4Component,
    Workshop5Component,
    Workshop6Component,
    Workshop7Component,
    Workshop8Component,
    Workshop9Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

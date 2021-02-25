import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
    NavigationBarComponent,
    FileManagerComponent,
    UploadVideoComponent,
    StatisticsComponent,
    SettingsComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

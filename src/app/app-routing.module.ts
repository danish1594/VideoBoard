import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SupportComponent } from './support/support.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';

const routes: Routes = [{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: DasboardComponent},
{ path: 'manager', component: FileManagerComponent},
{ path: 'upload', component: UploadVideoComponent},
{ path: 'stats', component: StatisticsComponent},
{ path : 'settings', component: SettingsComponent},
{ path : 'support', component: SupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

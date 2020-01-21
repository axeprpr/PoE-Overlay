import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandModule } from '@modules/command/command.module';
import { EvaluateModule } from '@modules/evaluate/evaluate.module';
import { MapModule } from '@modules/map/map.module';
import { MiscModule } from '@modules/misc/misc.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { OverlayComponent } from './layout/page/overlay/overlay.component';
import { UserSettingsComponent } from './layout/page/user-settings/user-settings.component';

const routes: Routes = [
  {
    path: 'user-settings',
    component: UserSettingsComponent,
  },
  {
    path: '**',
    component: OverlayComponent
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    // routing
    RouterModule.forRoot(routes, {
      useHash: true
    }),

    // layout
    LayoutModule,

    // app
    EvaluateModule,
    CommandModule,
    MapModule,
    MiscModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

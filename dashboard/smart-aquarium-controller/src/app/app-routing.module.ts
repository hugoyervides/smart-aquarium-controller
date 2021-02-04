import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../app/navbar/navbar.component'
import { SensorsComponent } from '../app/sensors/sensors.component'
import { SettingsComponent } from '../app/settings/settings.component'
import { StatusComponent } from '../app/status/status.component'

const routes: Routes = [
  { path: 'status', component: StatusComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'sensors', component: SensorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

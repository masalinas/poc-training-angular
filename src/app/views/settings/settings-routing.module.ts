import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './main/settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class SettingsRoutingModule { }
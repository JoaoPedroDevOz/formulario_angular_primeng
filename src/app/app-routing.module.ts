import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetExportComponent } from './componentes/get-export/get-export.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app-get-export'
  },
  {
    path: 'app-get-export',
    component: GetExportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

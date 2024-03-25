import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContatoComponent } from './components/contato/contato.component';
import { BodyComponent } from './components/prev-incendio/body.component';

const routes: Routes = ([
  {path: '', component: MainComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'preinc', component: BodyComponent},
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

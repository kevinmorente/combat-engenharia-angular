import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ArcondServiceComponent } from './components/servicos/arcond-service/arcond-service.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = ([
  {path: '', component: MainComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'arcondservice', component: ArcondServiceComponent}
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

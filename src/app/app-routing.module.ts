import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { SbPrevinComponent } from './saiba-mais/sb-previn/sb-previn.component';
import { SbEletricaComponent } from './saiba-mais/sb-eletrica/sb-eletrica.component';
import { SbArcondComponent } from './saiba-mais/sb-arcond/sb-arcond.component';
import { SbAutomacaoComponent } from './saiba-mais/sb-automacao/sb-automacao.component';

const routes: Routes = ([
  {path: '', component: MainComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'previnc', component: SbPrevinComponent},
  {path: 'eletrica', component: SbEletricaComponent},
  {path: 'arcond', component: SbArcondComponent},
  {path: 'automacao', component: SbAutomacaoComponent},
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

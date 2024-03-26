import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './components/prev-incendio/body.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { EletricaComponent } from './components/eletrica/eletrica.component';
import { ArcondComponent } from './components/arcond/arcond.component';
import { CardClcbAprovComponent } from './components/card-clcb-aprov/card-clcb-aprov.component';
import { CardEletroDoneComponent } from './components/card-eletro-done/card-eletro-done.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { AutomacaoComponent } from './components/automacao/automacao.component';
import { PrevincServicosComponent } from './components/servicos/previnc-servicos/previnc-servicos.component';
import { EletricaServiceComponent } from './components/servicos/eletrica-service/eletrica-service.component';
import { ArcondServiceComponent } from './components/servicos/arcond-service/arcond-service.component';
import { AutomacaoServiceComponent } from './components/servicos/automacao-service/automacao-service.component';
import { SaibaMaisComponent } from './components/saiba-mais/saiba-mais.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CliArcordComponent } from './components/clientes/cli-arcord/cli-arcord.component';
import { CliPrevinComponent } from './components/clientes/cli-previn/cli-previn.component';
import { CliEletricaComponent } from './components/clientes/cli-eletrica/cli-eletrica.component';
import { CliAutomacaoComponent } from './components/clientes/cli-automacao/cli-automacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SobreNosComponent,
    EletricaComponent,
    ArcondComponent,
    CardClcbAprovComponent,
    CardEletroDoneComponent,
    MainComponent,
    FooterComponent,
    ContatoComponent,
    ServicosComponent,
    AutomacaoComponent,
    PrevincServicosComponent,
    EletricaServiceComponent,
    ArcondServiceComponent,
    AutomacaoServiceComponent,
    SaibaMaisComponent,
    ClientesComponent,
    CliArcordComponent,
    CliPrevinComponent,
    CliEletricaComponent,
    CliAutomacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

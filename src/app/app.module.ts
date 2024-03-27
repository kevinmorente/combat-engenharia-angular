import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './components/prev-incendio/body.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { EletricaComponent } from './components/eletrica/eletrica.component';
import { ArcondComponent } from './components/arcond/arcond.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { AutomacaoComponent } from './components/automacao/automacao.component';
import { PrevincServicosComponent } from './components/servicos/previnc-servicos/previnc-servicos.component';
import { EletricaServiceComponent } from './components/servicos/eletrica-service/eletrica-service.component';
import { ArcondServiceComponent } from './components/servicos/arcond-service/arcond-service.component';
import { AutomacaoServiceComponent } from './components/servicos/automacao-service/automacao-service.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CliArcordComponent } from './components/clientes/cli-arcord/cli-arcord.component';
import { CliPrevinComponent } from './components/clientes/cli-previn/cli-previn.component';
import { CliEletricaComponent } from './components/clientes/cli-eletrica/cli-eletrica.component';
import { CliAutomacaoComponent } from './components/clientes/cli-automacao/cli-automacao.component';
import { SbPrevinComponent } from './saiba-mais/sb-previn/sb-previn.component';
import { SbEletricaComponent } from './saiba-mais/sb-eletrica/sb-eletrica.component';
import { SbArcondComponent } from './saiba-mais/sb-arcond/sb-arcond.component';
import { SbAutomacaoComponent } from './saiba-mais/sb-automacao/sb-automacao.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SobreNosComponent,
    EletricaComponent,
    ArcondComponent,
    MainComponent,
    FooterComponent,
    ContatoComponent,
    ServicosComponent,
    AutomacaoComponent,
    PrevincServicosComponent,
    EletricaServiceComponent,
    ArcondServiceComponent,
    AutomacaoServiceComponent,
    ClientesComponent,
    CliArcordComponent,
    CliPrevinComponent,
    CliEletricaComponent,
    CliAutomacaoComponent,
    SbPrevinComponent,
    SbEletricaComponent,
    SbArcondComponent,
    SbAutomacaoComponent,
    MenuComponent
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

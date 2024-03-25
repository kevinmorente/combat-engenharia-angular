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
    ContatoComponent
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

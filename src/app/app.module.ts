import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule, Route} from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BotonEnvioComponent } from './boton-envio/boton-envio.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { IndexComponent } from './index/index.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EsloganContactanosComponent } from './eslogan-contactanos/eslogan-contactanos.component';



const routes: Route[]=[
  {path: '', component: HeaderComponent},
  {path: 'promocion', component: CalculadoraComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    BotonEnvioComponent,
    CalculadoraComponent,
    IndexComponent,
    ContactanosComponent,
    HeaderComponent,
    FooterComponent,
    FormularioComponent,
    EsloganContactanosComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

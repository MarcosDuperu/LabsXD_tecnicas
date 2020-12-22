import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListaComponent } from './components/lista/lista.component';
import { APP_ROUTING } from "./app.routes";


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from "./components/lista/lista.component";

 const ROUTES:Routes = [

  {path: 'lista', component: ListaComponent },
  {path: '', pathMatch:'full', redirectTo:'lista'},
  {path: '**', pathMatch:'full', redirectTo:'lista'}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
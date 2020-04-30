import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAdminComponent } from './componentes/pelicula-admin/pelicula-admin.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { ActorAdminComponent } from './componentes/actor-admin/actor-admin.component';


const routes: Routes = [
  { path:'bienvenido', component: BienvenidaComponent},
  { path: 'busqueda', component: BusquedaComponent},
  { path: 'peliculas', 
      children: [
        { path: 'alta', component: PeliculaAltaComponent},
        { path: 'listado', component: PeliculaListadoComponent}
      ]  
  },
  { path:'actor', component: ActorAdminComponent,
      children: [
        { path: 'alta', component: ActorAltaComponent},
        { path: 'listado', component: ActorListadoComponent}
      ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'bienvenido'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

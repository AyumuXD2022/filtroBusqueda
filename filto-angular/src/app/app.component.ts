import { Component } from '@angular/core';
import { PersonaService } from './services/persona.service';
import { PersonaModel } from './model/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filto-angular';
  personas?:PersonaModel[];
  filtrarNombre = "";
  noResultados: boolean = false;
  constructor(private personaService:PersonaService){
    this.getPersona()
  }

  private getPersona(){
    this.personaService.getPersonas().subscribe(
      ({response}) => {
        const personaFiltrada = response.filter(
          (persona:any) =>
            persona.nombre.toLowerCase().includes(this.filtrarNombre.toLowerCase())
        );
        if (personaFiltrada.length === 0) {
          this.noResultados = true;
        } else {
          this.noResultados = false;
          this.personas = personaFiltrada;
        }
      }
    )
  }
  protected onFiltroPalabraChange() {
    this.noResultados = false;
    this.getPersona(); 
  }
}

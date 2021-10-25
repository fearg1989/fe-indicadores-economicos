import { Component, OnInit } from '@angular/core';
import { DatosEconomicosService } from './datos-economicos.service';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'fe-indicadores-economicos';
  datosEconomicos =  Object();
  listaDatos: Array<any> = [];
  columnas: string[] = ['name', 'key', 'unit', 'value', 'date'];
  dataSource = new MatTableDataSource<any>();
  

  constructor(private  DatosEconomicosService:DatosEconomicosService){ }
  
  ngOnInit(): void{
    this.llamarDatosEconomicos();
  }

  
  public llamarDatosEconomicos(){
    this.DatosEconomicosService.getDatosEconomicos(environment.apiDatosEconomicos)
    .subscribe(
      respuesta => {
        this.datosEconomicos = respuesta;
        this.datosEconomicos = this.datosEconomicos.apis[0].example.response;
        for (let dato of Object.keys(this.datosEconomicos)) {
          this.listaDatos.push(this.datosEconomicos[dato]);
        } 
        this.dataSource = new MatTableDataSource<any>(this.listaDatos);
      }
    )
  }
  
}

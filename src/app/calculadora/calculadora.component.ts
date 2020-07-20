import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {


  tarifaGlobal: {
    ubicacion: string;
    cotizacion: number;
    moneda: string;
    imagen: string;
  }[];


  constructor() {

    this.tarifaGlobal = [
      {
        ubicacion: 'AR',
        cotizacion: 1750,
        moneda: 'peso argentino',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
      },
      {
        ubicacion: 'BR',
        cotizacion: 8600,
        moneda: 'real',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/300px-Flag_of_Brazil.svg.png"
      },
      {
        ubicacion: 'CHL',
        cotizacion: 228,
        moneda: 'peso chileno',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1200px-Flag_of_Chile.svg.png"
      },
      {
        ubicacion: 'COL',
        cotizacion: 3000,
        moneda: 'peso colombiano',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
      },
      {
        ubicacion: 'PER',
        cotizacion: 20400,
        moneda: 'sol',
        imagen: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg"
      },
      {
        ubicacion: 'USA',
        cotizacion: 185900,
        moneda: 'dólar',
        imagen: "https://www.lifeder.com/wp-content/uploads/2018/11/bandera-1795-1818.png"
      },
      {
        ubicacion: 'EU',
        cotizacion: 209000,
        moneda: 'euro',
        imagen: "https://cadenaser00.epimg.net/emisora/imagenes/2018/07/17/radio_cadiz/1531818272_306536_1531818407_noticia_normal.jpg"
      },
    ]

  }

  cotizacionPuntual: number = 185900;
  monedaPuntual: string = 'dólar';

  cantidadColocada: number= 0;
  cantidadTotal: number;


  cambiarTarifa(indice) {
    console.log(indice)
    this.cotizacionPuntual = indice.cotizacion;
    this.monedaPuntual = indice.moneda;
  }

 


  

  ngOnInit(): void {
  }

}

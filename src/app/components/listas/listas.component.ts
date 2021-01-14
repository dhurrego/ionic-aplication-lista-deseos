import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

import { DeseosService } from '../../services/deseos.service';

import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  
  @Input() terminada: boolean = true;

  constructor( 
  	public deseosService: DeseosService, 
  	private router: Router,
    private alertController: AlertController 
  ) {}

  ngOnInit() {}

  listaSeleccionada( lista: Lista ) {
    console.log(this.terminada);
  	if(this.terminada){
  		this.router.navigateByUrl(`tabs/tab2/agregar/${ lista.id }`);
  	}else{
  		this.router.navigateByUrl(`tabs/tab1/agregar/${ lista.id }`);
  	}
    
  }

  async editarLista( lista: Lista ) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Editar lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Editar',
          handler: (data) => {
            if(data.titulo.length === 0){
              return;
            }

            lista.titulo = data.titulo;

            this.deseosService.guardarStorage();

          }
        }
      ]
    });

    alert.present();

  }

}

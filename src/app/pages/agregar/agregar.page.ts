import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DeseosService } from '../../services/deseos.service';

import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem: string = '';

  constructor( 
  	private deseosService: DeseosService,
  	private route: ActivatedRoute,
  	private router: Router
  ) { 
  	
  	const listaId = this.route.snapshot.paramMap.get('listaId');
	this.lista = this.deseosService.obtenerLista( listaId );
	if(!this.lista){
		this.router.navigate(['/']);
	}  	
  }

  ngOnInit() {
  }

  agregarItem() {

  	if(this.nombreItem.length === 0){
  		return;
  	}

  	const nuevoItem = new ListaItem( this.nombreItem );
  	this.lista.items.push( nuevoItem );

  	this.nombreItem = '';

  	this.setPendientes();
  	this.deseosService.guardarStorage();

  }

  cambioCheck( item: ListaItem ){

  	this.setPendientes();

  	this.deseosService.guardarStorage();
  }

  setPendientes(){
  	const pendientes = this.lista.items.filter( itemData => {
  		return !itemData.completado;
  	}).length;

  	if( pendientes === 0 ){
  		this.lista.terminadaEn = new Date();
  		this.lista.terminada = true;
  	}else{
  		this.lista.terminadaEn = null;
  		this.lista.terminada = false;
  	}
  }

  borrar( i: number ){
  	this.lista.items.splice(i,1);
  	this.deseosService.guardarStorage();
  }

}

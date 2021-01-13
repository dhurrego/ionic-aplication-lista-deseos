import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  terminada: boolean = true;

  constructor( 
  	public deseosService: DeseosService, 
  	private router: Router,
  ) {}

}

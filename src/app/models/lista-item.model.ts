
export class ListaItem {


	public descripcion: string;
	public completado: boolean;

	constructor( desc: string ) {
		this.descripcion = desc;
		this.completado = false;
	}

}
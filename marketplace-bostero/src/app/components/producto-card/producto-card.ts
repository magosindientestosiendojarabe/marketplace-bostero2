import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Producto } from '../../models/producto/producto';

@Component({
  selector: 'app-producto-card',
  imports: [],
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css',
})
export class ProductoCard {
  @Input() producto!: Producto;

  @Output() agregarAlCarrito = new EventEmitter<Producto>();

  onAgregar(): void {
    this.agregarAlCarrito.emit(this.producto);
  }
}


import { Component } from '@angular/core';
import { Producto } from '../../models/producto/producto';
import { ProductoCard } from '../../components/producto-card/producto-card';

@Component({
  selector: 'app-producto',
  imports: [ProductoCard],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  productos:Producto[] = [
    {
    id:1,
    nombre:'Camiseta Boca Juniors 25 Aniversario Bicampeón de América 2001',
    precio:149000,
    descripcion:'Hombre,Unisex,ORIGINAL',
    imagen:'',
    categoria:'indumentaria'
    },

    {
    id:2,
    nombre:'Short Adidas Boca Juniors 2025/2026',
    precio:79000,
    descripcion:'short ligero hombre',
    imagen:'',
    categoria:'indumentaria'
    },
    
    {
    id:3,
    nombre:'Camiseta de Boca 2007 titular poco uso',
    precio:60000,
    descripcion:'camiseton original poco uso',
    imagen: '',
    categoria:'indumentaria'
    },
    
    {
    id:4,
    nombre:'MOUSEPAD BOSTERO',
    precio:80000,
    descripcion:'mousepad de la bombonera',
    imagen: '',
    categoria:'electronica'
    },

    {
    id:5,
    nombre:'SILLA GAMER DE BOCA',
    precio:0,
    descripcion:'ergonomica con apoya pies',
    imagen: '',
    categoria:'electronica'
    },

    {
    id:6,
    nombre:'auriculares de boca',
    precio:5000,
    descripcion:'nuevos',
    imagen: '',
    categoria:'electronica'
    },

    {
    id:7,
    nombre:'mate de boca jr',
    precio:40000,
    descripcion:'mate con logo y nombre (solo mate)',
    imagen: '',
    categoria:'accesorios'
    
    },

    {
    id:8,
    nombre:'pelota de boca',
    precio:20000,
    descripcion:'nada eso',
    imagen: '',
    categoria:'deporte'
    }, 

    {
    id:9,
    nombre:'canilleras de boca',
    precio:5000,
    descripcion:'nuevas sin uso',
    imagen: '',
    categoria:'deporte'
    },

    {
    id:10,
    nombre:'Billetera de boca',
    precio:10000,
    descripcion:'billetera de cuero',
    imagen: '',
    categoria:'accesorios'
    },

  ]
  productosFiltrados: Producto[] = [...this.productos];

  filtrarCategoria(categoria: string) {
    this.productosFiltrados = this.productos.filter(
      producto => producto.categoria === categoria
    );
  }

  mostrarTodos() {
    this.productosFiltrados = [...this.productos];
  }

}



import './style.css'
import { productos } from './datos.js'

const catalogo = document.getElementById('catalogo')

function mostrarProductos(lista) {
  catalogo.innerHTML = lista.map(p => `
    <div class="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
      <div>
        <h2 class="text-lg font-semibold">${p.nombre}</h2>
        <p class="text-gray-600">$${p.precio}</p>
      </div>
      <button data-id="${p.id}" class="mt-4 bg-slate-700 text-white py-2 rounded hover:bg-slate-900">
        Agregar
      </button>
    </div>
  `).join('')


mostrarProductos(productos)
}

mostrarProductos(productos)

// ------------------------------------------------------------
// EJERCICIO 3 — Armar el pedido
// El pedido es un arreglo con los productos que la persona va agregando.
// Pasos (detalle en el README):
//   1. Escucha el clic en el contenedor #catalogo (delegación de eventos).
//   2. Busca el producto por id con .find() y agrégalo con .push().
//   3. Dibuja el pedido con mostrarPedido() y calcula el total con .reduce().
//   4. Botón "Vaciar pedido".
// ------------------------------------------------------------
const pedido = []

// Escribe aquí tu código del Ejercicio 3

// ------------------------------------------------------------
// EJERCICIO 4 — Filtrar por categoría
// Botones de categoría que llamen a mostrarProductos() con
// productos.filter(...). El botón "Todos" muestra la lista completa.
// ------------------------------------------------------------

// Escribe aquí tu código del Ejercicio 4

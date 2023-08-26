document.addEventListener('DOMContentLoaded', function () {
    const eventoForm = document.getElementById('evento-form');
    const eventosLista = document.getElementById('eventos-lista');
  
    eventoForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Obtener valores del formulario
      const nombre = document.getElementById('nombre').value;
      // Obtener más valores aquí
  
      // Crear una nueva fila en la tabla de eventos
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${nombre}</td>
        <td>Fecha</td>
        <td>Lugar</td>
        <!-- Agregar más celdas de datos aquí -->
      `;
  
      eventosLista.appendChild(newRow);
  
      // Limpiar el formulario
      eventoForm.reset();
    });
  });
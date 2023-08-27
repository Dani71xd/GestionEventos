document.addEventListener('DOMContentLoaded', function () {
    const eventoForm = document.getElementById('evento-form');
    const eventosLista = document.getElementById('eventos-lista');
  
    eventoForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Obtener valores del formulario
      const nombre = document.getElementById('nombre').value;
      const Fecha = document.getElementById('Fecha').value;
      const Lugar = document.getElementById('Lugar').value;
      const Responsable = document.getElementById('Responsable').value;
      const Descripcion = document.getElementById('Descripcion').value;
      const Participantes = document.getElementById('Participantes').value;
      // Crear una nueva fila en la tabla de eventos
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${nombre}</td>
        <td>${Fecha}</td>
        <td>${Lugar}</td>
        <td>${Responsable}</td>
        <td>${Descripcion}</td>
        <td>${Participantes}</td>
      `;
  
      eventosLista.appendChild(newRow);
  
      // Limpiar el formulario
      eventoForm.reset();
    });
  });
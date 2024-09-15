<template>
  <div>
    <h2>Listado de Cotizaciones</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Compra</th>
          <th>Venta</th>
          <th>Última Actualización</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cotizacion in cotizaciones" :key="cotizacion.nombre">
          <td>{{ cotizacion.nombre }}</td>
          <td>{{ cotizacion.compra }}</td>
          <td>{{ cotizacion.venta }}</td>
          <td>{{ cotizacion.ultima }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  name: 'Cotizaciones',
  setup() {
    const cotizaciones = ref([]);

    function obtenerCotizaciones() {
      axios
        .get('https://dolarapi.com/v1/dolares')
        .then((response) => {
          console.log(response.data); 
          cotizaciones.value = response.data;  
        })
        .catch((error) => {
          console.error('Error al obtener cotizaciones:', error);
        });
    }

    onMounted(() => {
      obtenerCotizaciones();  
    });

    return {
      cotizaciones,
    };
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
.table {
  width: 100%;
  margin-top: 10px;
}
</style>

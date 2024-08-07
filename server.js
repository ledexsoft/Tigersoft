import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
// Definir las tres constantes
const cadena1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzd3F";
const cadena2 = "teG1hbnV0cWxheXpkdHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4OTAyNTgsImV4cCI6";
const cadena3 = "MjAzODQ2NjI1OH0.gqQlCMMzFEMGYRIMV1Yv8B_RbbXKb-69rlJU1tc1o6Y";

// Unir las tres cadenas en una sola variable global
window.cadenaUnida = cadena1 + cadena2 + cadena3;

// Inicializa Supabase
const supabase = createClient(
    'https://bswqmxmanutqlayzdtpk.supabase.co',
    window.cadenaUnida
);

async function fetchData() {
  let { data: Inventario_de_Tienda, error } = await supabase
    .from('Inventario_de_Tienda')
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  const tbody = document.getElementById('products-tbody');
  Inventario_de_Tienda.forEach(item => {
    const row = document.createElement('tr');

    const importe = item.Cantidad * item.Precio;

    // Formatear la fecha sin la zona horaria
    const createdAt = new Date(item.created_at).toLocaleDateString();

    row.innerHTML = `
      <td>
        <div class="d-flex">
          <div class="form-check my-auto">
            <input class="form-check-input" type="checkbox" id="customCheck1" checked="">
          </div>
          <img class="w-10 ms-3" src="https://th.bing.com/th/id/OIP.tigsylfqnlPgwdYW12nRYwHaHa?w=209&h=210&c=7&r=0&o=5&pid=1.7" alt="${item.Producto}">
          <h6 class="ms-3 my-auto">${item.Producto}</h6>
        </div>
      </td>
      <td class="text-sm">${createdAt}</td>
      <td class="text-sm">${item.Lote}</td>
      <td class="text-sm">$${item.Precio}</td>
      <td class="text-sm">$${importe}</td>
      <td class="text-sm">${item.Cantidad}</td>
      <td class="text-sm">
        <a href="product-details.html?id=${item.id}" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
          <i class="material-icons text-secondary position-relative text-lg">visibility</i>
        </a>
        <a href="edit-product.html?id=${item.id}" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit product">
          <i class="material-icons text-secondary position-relative text-lg">drive_file_rename_outline</i>
        </a>
        <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product" onclick="deleteProduct(${item.id}, this)">
          <i class="material-icons text-secondary position-relative text-lg">delete</i>
        </a>
      </td>
    `;

    tbody.appendChild(row);
  });

  // Inicializar DataTables
  $('#products-list').DataTable();
}

// Definir la función deleteProduct en el contexto global
window.deleteProduct = async function(id, element) {
  const { error } = await supabase
    .from('Inventario_de_Tienda')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting product:', error);
    return;
  }

  // Eliminar la fila de la tabla
  const row = element.closest('tr');
  row.remove();
}

fetchData();
          
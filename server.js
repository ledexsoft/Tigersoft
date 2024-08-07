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

// Imprimir la cadena unida en la consola
console.log(window.cadenaUnida);

let { data: Inventario_de_Tienda, error } = await supabase
  .from('Inventario_de_Tienda')
  .select('*')
          
          
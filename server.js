import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Definir las tres constantes
const cadena1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ";
const cadena2 = "zdXBhYmFzZSIsInJlZiI6Imd0ZXdxZWR5em15bmV1ZGFtYW9jIiwicm9sZSI6InNlcnZpY";
const cadena3 = "2Vfcm9sZSIsImlhdCI6MTcxMTg0MDIzNCwiZXhwIjoyMDI3NDE2MjM0fQ.73G9ftJfKNBzBaepT2DWlRCa11usXXbyZD-ZSFT24HM";

// Unir las tres cadenas en una sola variable global
window.cadenaUnida = cadena1 + cadena2 + cadena3;

// Inicializa Supabase
const supabase = createClient(
    'https://gtewqedyzmyneudamaoc.supabase.co',
    window.cadenaUnida
);

// Imprimir la cadena unida en la consola
console.log(window.cadenaUnida);

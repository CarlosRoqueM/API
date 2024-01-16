import { connection } from "../database/database";

const getClients = async (req, res) => {
  try {

    const result = await connection.promise().query("SELECT dni, nombres, fecha_nacimiento, celular, correo, banco, numero_cci, trial155 FROM clientes");

    // Log de los resultados (puedes comentar esto en producción)
    console.log(result);

    // Envia los resultados como respuesta
    res.json(result[0]); 

  } catch (error) {

    // Manejo de errores
    
    console.error("Error al obtener clientes:", error);
    res.status(500).json({ error: "Error al obtener clientes" });
  }
};

export const methods = {
  getClients
};

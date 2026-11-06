// Función de Vercel: hace en internet lo mismo que la ruta POST /api/chat del backend.
// Usa el mismo servicio de Groq y el mismo prompt de sistema del backend.
const { generateResponse } = require("../backend/src/services/groq.service");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Usá POST para enviar mensajes." });
  }

  try {
    const { message, history } = req.body || {};

    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: "El mensaje no puede estar vacío." });
    }

    const response = await generateResponse(message, history || []);

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error("Error al consultar la IA:", error.message);

    res.status(500).json({ success: false, message: "No se pudo obtener una respuesta de la IA." });
  }
};

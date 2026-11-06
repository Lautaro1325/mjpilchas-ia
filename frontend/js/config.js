// Dirección del backend.
// Si la página la sirve el propio backend (http://localhost:1717), usamos la ruta relativa.
// Si se abre con Live Server o como archivo, apuntamos al backend en localhost:1717.
const API_URL = location.port === "1717"
    ? "/api/chat"
    : "http://localhost:1717/api/chat";

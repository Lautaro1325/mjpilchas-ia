// Dirección del backend.
// En tu PC (Live Server) usa el servidor local; publicado en Vercel usa /api/chat.
const API_URL =
    location.hostname === "localhost" || location.hostname === "127.0.0.1"
        ? "http://localhost:3000/api/chat"
        : "/api/chat";

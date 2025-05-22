const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Serve static files from the dist directory
app.use(express.static('dist'));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  // Verificar si el archivo existe en la carpeta dist
  const filePath = path.join(__dirname, 'dist', req.path === '/' ? 'index.html' : req.path);
  
  // Si el archivo no existe, servir index.html para manejar el enrutamiento del lado del cliente
  if (!fs.existsSync(filePath) || fs.lstatSync(filePath).isDirectory()) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  } else {
    // Si el archivo existe, servirlo
    res.sendFile(filePath);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Asegúrate de que has ejecutado `npm run build` antes de iniciar el servidor');
});

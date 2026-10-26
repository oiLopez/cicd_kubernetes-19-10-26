
const express = require('express'); 
const os = require('node:os'); 
const app = express(); 
 
app.get('/', (req, res) => { 
  const pod = os.hostname(); 
  console.log(`Requisicao atendida por ${pod}`); 
  res.set('Cache-Control', 'no-store'); 
  res.json({ mensagem: 'Ola, Kubernetes!', pod }); 
}); 
 
const port = process.env.PORT || 3000; 
app.listen(port, '0.0.0.0', () => { 
  console.log(`API rodando na porta ${port}`); 
}); 
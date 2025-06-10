import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/log-route', (req, res) => {
  const { path } = req.body;
  console.log(`📍 Usuario navegó a: ${path}`);
  res.sendStatus(200);
});

app.post('/', (req, res) => {
    console.log("Vacio");
});


app.post('/about', (req, res) => {
    console.log("About");
});

app.post('/contact', (req, res) => {
    console.log("contact");
});

app.listen(PORT, () => {
  console.log(`✅ Backend en http://localhost:${PORT}`);
});

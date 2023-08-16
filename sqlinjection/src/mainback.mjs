import express from 'express'
const app = express();
const port = 8888; 
import cors from 'cors'
import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1234',
  port: 7777,
});

app.use(express.json());
app.use(cors(
  {
    origin: 'http://localhost:5173',
    methods: ['POST', 'GET'],
  }
));


//INSERTAR 10 COMENTARIOS
app.post('/api/insert_comments', async (req, res) => {
  try {
    const fecha = new Date();

    const query = 'INSERT INTO comments (usuario, comentario, fecha) VALUES ($1, $2, $3)';
    for (let i = 1; i <= 10; i++) {
      await pool.query(query, ['Usuario '+ i, 'Comentario '+ i, fecha])
    }
    res.status(201).json({ message: 'success' });
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
});

//TODOS LOS COMENTAIRIOS
app.get('/api/comments', async (req, res) => {
  try {
    const query = 'SELECT * FROM comments';
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
});

//Insertar un Comentario
app.post('/api/comment', async (req, res) => {
  try {
    const { usuario, comentario } = req.body;
    const fecha = new Date();
    const query = `INSERT INTO comments (usuario, fecha, comentario) VALUES ('${usuario}', '${fecha}', '${comentario}')`

    const result = await pool.query(query);
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'error' });
  }
});

app.listen(port, () => {
  console.log(`ola`);
});

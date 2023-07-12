import express from 'express'
import router from './routes/routes.js'
import userRouter from './routes/userRoutes.js'
import bodyParser from 'body-parser'

const app = express()

import mongoose from "mongoose";

// URL de connexion à la base de données
const dbURI = 'mongodb+srv://dimax92:dimax92@cluster0.dnds8.mongodb.net/les_bons_artisans?retryWrites=true&w=majority';

// Options de configuration (facultatif)
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connexion à la base de données
mongoose.connect(dbURI, options)
  .then(() => {
    console.log('Connexion réussie à la base de données');
  })
  .catch((err) => {
    console.error('Erreur de connexion à la base de données:', err);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})
app.use(bodyParser.json())
app.use('', router)
app.use('', userRouter)

export default app
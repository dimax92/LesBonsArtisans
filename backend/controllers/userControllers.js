import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

export async function signUp(req, res, next) {
    const { username, password } = req.body;
  
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'L\'utilisateur existe déjà' });
    }
  
    // Créer un nouvel utilisateur
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword
    });
    await newUser.save();
  
    res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
  };
  
  // Route d'authentification
export async function login(req, res, next) {
    const { username, password } = req.body;
  
    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }
  
    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }
  
    // Générer un JWT
    const token = jwt.sign({ username: user.username }, 'secretKey');
  
    res.status(200).json({ token });
  };
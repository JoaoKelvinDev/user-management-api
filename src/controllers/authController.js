import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

// Helper para gerar o Token (evita repetição se precisar renovar token depois)
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )
}

export async function register(req, res) {
  try {
    const { name, email, password } = req.body

    // 1. Validação simples (Pode usar bibliotecas como Zod ou Joi aqui)
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
    }

    const userExists = await User.findOne({ where: { email } })
    if (userExists) {
      return res.status(400).json({ message: 'Usuário já existe' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    })

    // Removendo a senha do objeto de retorno de forma limpa
    const { password: _, ...userWithoutPassword } = newUser.toJSON()

    return res.status(201).json({
      message: 'Usuário criado com sucesso',
      user: userWithoutPassword
    })
  } catch (error) {
    console.error("Erro no Registro:", error) // Importante para logar o erro real no console
    return res.status(500).json({ message: 'Erro interno do servidor' })
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })
    
    // Comparação de senha só ocorre se o usuário existir
    // O uso do "return" imediato evita processamento desnecessário
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Credenciais inválidas' })
    }

    const token = generateToken(user)

    return res.json({ 
      token, 
      user: { id: user.id, name: user.name } // É útil retornar o nome para o front-end
    })
  } catch (error) {
    console.error("Erro no Login:", error)
    return res.status(500).json({ message: 'Erro interno do servidor' })
  }
}
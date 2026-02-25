import jwt from 'jsonwebtoken'

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      message: 'Token não fornecido'
    })
  }

  // formato esperado: Bearer TOKEN
  const [, token] = authHeader.split(' ')

  if (!token) {
    return res.status(401).json({
      message: 'Token mal formatado'
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // salva o id do usuário na request
    req.userId = decoded.id

    return next()
  } catch (error) {
    return res.status(401).json({
      message: 'Token inválido ou expirado'
    })
  }
}

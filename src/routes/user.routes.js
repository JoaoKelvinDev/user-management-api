import { Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import User from '../models/User.js'

const router = Router()

router.get('/me', authMiddleware, async (req, res) => {
  const user = await User.findByPk(req.userId, {
    attributes: ['id', 'name', 'email', 'createdAt']
  })

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' })
  }

  return res.json(user)
})

export default router

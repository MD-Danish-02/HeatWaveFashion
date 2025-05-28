import {Router} from 'express'
import { login,register,profile } from '../controllers/user.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'

const router = Router()

router.route("/login").post(login)
router.route("/register").post(register)
router.route("/profile").get(verifyJWT,profile)

export default router;
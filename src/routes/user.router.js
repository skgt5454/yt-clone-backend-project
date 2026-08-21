
import {Router} from 'express' // yha Router bracket ke andar isliye likha kyunki express ke andar Router ek named export hai
import { registerUser } from '../controllers/user.controller.js'

const router = Router()
router.route("/register").post(registerUser)



export default router



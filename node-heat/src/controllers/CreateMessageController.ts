import { Request, Response } from "express"
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
  async handle(req: Request, res: Response) {

    const { message } = req.body
    const { user_id } = req
    const service = new CreateMessageService()

    try {
      const resulte = await service.execute(message, user_id)
      return res.json(resulte)
    } catch (error) {
      return res.json(error.message)
    }
  }
}

export { CreateMessageController }
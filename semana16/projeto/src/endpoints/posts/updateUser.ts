import connection from "../../connection";
import { Request, Response } from "express";

const updateUsers = async (req: Request, res: Response) => {
  try {
    if (!req.body.name || !req.body.nickname || !req.body.email) {
      throw new Error("Invalid params");
    } else {
      await connection("Users")
        .update({
          name: req.body.name,
          nickname: req.body.nickname,
          email: req.body.email,
        })
        .where({
          id: req.params.id,
        });

      res.end("Usuário editado com sucesso!");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Erro ao editar seu usuário");
  }
};

export default updateUsers;

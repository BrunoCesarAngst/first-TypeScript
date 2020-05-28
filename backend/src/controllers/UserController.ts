import { Request, Response} from 'express';
import EmailServices from '../services/EmailServices';

const users = [
  { name: "Bruno César Angst" , email: "bruno.angst@rede.ulbra.br"}
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailServices = new EmailServices();

    emailServices.sendMail({
      to: {
        name: 'Bruno César Angst',
        email: 'bruno.angst@rede.ulbra.br'
      },
      message: {
        subject: 'O sistema TypeScript',
        body: 'Seja Bem vindo!!!'
      },
    });

    return res.send();
  }
};
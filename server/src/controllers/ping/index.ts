import { Response, Request } from 'express';

export const getPing = async (req: Request, res: Response): Promise<void> => {
  try {
    res.status(200).send({ data: 'Pong!' });
  } catch (error) {
    console.log('Error: ' + error);
    throw error;
  }
};

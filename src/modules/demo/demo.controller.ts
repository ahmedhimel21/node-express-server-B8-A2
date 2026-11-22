import type { Request, Response } from "express";
import { demoService } from "./demo.service";

const demo = async (req: Request, res: Response) => {
  try {
    const res = await demoService.demo();
  } catch (error) {
    console.log(error);
  }
};

export const demoController = {
  demo,
};

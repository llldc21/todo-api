import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('todo')
export class TodoController {
	@Get('list')
	public async list(req: Request, res: Response): Promise<Response> {
		return res.json([]);
	}
}

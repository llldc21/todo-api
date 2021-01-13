import express from 'express';
import { controllers } from './controllers';
import { Server } from '@overnightjs/core';

class App extends Server {
	server: express.Application;

	constructor() {
		super();
		this.server = this.app;

		this.expressSetup();
		this.setupRoutes();
	}

	private expressSetup() {
		this.server.use(express.json());
		this.server.use(express.urlencoded({ extended: true }));
	}

	private setupRoutes() {
		this.addControllers(controllers);
	}
}

export default new App().server;

import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
class ServerApplication {
	public app: INestApplication;

	/**
	 * start application and get the instance of application
	 */
	static async start(): Promise<ServerApplication> {
		const app = new ServerApplication();
		await app.init();
		return app;
	}

	/**
	 * Initialize the application and load necessary modules
	 */
	async init() {
		await BootstrapManager.loadEnvironment();
		const {
			env: { PORT = 3000 }
		} = process;
		this.app = await NestFactory.create(AppModule);
		/**
		 * @TODO inject middlewares
		 * this.app.use(...)
		 */
		this.app.enableCors();
		BootstrapManager.openAPISetup(this.app);
		this.app.listen(PORT);
	}
}

/**
 * Boostrap manager is the bootstrap helper class that will load all the required configurations
 * for the app. Create a separate function to bootstrap any specific library or feature.
 * The common bootstrap examples could be: OpenAPI, dotenv, logger etc.
 */
class BootstrapManager {
	static async loadEnvironment() {
		/**
		 * @TODO add environment load related logic.
		 */
	}
	static openAPISetup(app: INestApplication) {
		const config = new DocumentBuilder()
			.setTitle('Server Application Starter')
			.setDescription('The API of the application')
			.setVersion('1.0')
			.addTag('')
			.build();
		const document = SwaggerModule.createDocument(app, config);
		SwaggerModule.setup('docs', app, document);
	}
}

ServerApplication.start()
	.then(() => console.log('Application started'))
	.catch(err => console.error('Error while starting the application', err));

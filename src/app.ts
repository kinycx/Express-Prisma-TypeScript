import express, { Request, Response } from "express";
import * as User from "./user";

const app = express();

app.use(express.json());

enum routes {
	user = "/user",
}

app.post(`${routes.user}/create`, async (req: Request, res: Response) => {
	console.log(req.body);
	let user: User.userModel = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};
	try {
		await User.createUser(user);
		res.send(`User ${user.name} successfully created`);
	} catch (error) {
		res.sendStatus(500).send("Error creating user");
	}
});

app.get(`${routes.user}/get/:id`, async (req: Request, res: Response) => {
	try {
		const user = await User.getUser(req.params.id);
		res.send(user);
	} catch (error) {
		res.sendStatus(400).send("Cannot find user");
	}
});

app.get(
	`${routes.user}/getByName/:name`,
	async (req: Request, res: Response) => {
		console.log(req.query);
		try {
			const user = await User.getUserByName(req.params.name);
			res.send(user);
		} catch (error) {
			res.sendStatus(400).send("Cannot find user");
		}
	}
);

app.listen(3000, () => {
	console.log("Server started on port 3000");
});

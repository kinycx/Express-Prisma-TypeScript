import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createUser = async (data: any) => {
	const user = await prisma.user.create({
		data: {
			...data,
		},
	});
	console.log(user);
	return user;
};

export const getUser = async (id: string) => {
	const user = await prisma.user.findFirst({
		where: {
			id: id,
		},
	});
	console.log(user);
	return user;
};

export const getUserByName = async (name: string) => {
	const user = await prisma.user.findFirst({
		where: {
			name: name,
		},
	});
	console.log(user);
	return user;
};

export const getUsers = async () => {
	const users = await prisma.user.findMany();
	return users;
};

export const updateUser = async (id: string, data: any) => {
	const user = await prisma.user.update({
		where: {
			id: id,
		},
		data: {
			...data,
		},
	});
	return user;
};

export const deleteUser = async (id: string) => {
	const user = await prisma.user.delete({
		where: {
			id: id,
		},
	});
	return user;
};

export interface userModel {
	name: string;
	email: string;
	password: string;
}

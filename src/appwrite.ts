import { Account, Avatars, Client, Databases, ID, Query, type Models } from 'appwrite';

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('hive');
const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);
export default client;
export { account, avatars };

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
export const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'grey'];

export async function loggedIn() {
	try {
		return !!(await account.get());
	} catch (e) {
		return false;
	}
}

export async function tryGetUser() {
	try {
		if (await loggedIn()) return account.get();
	} catch (e) {
		console.error('Failed to get user', e);
	}
}

export function createUser(username: string, email: string, password: string) {
	if (!isValid(username, email, password)) return null;

	return account.create(ID.unique(), email, password, username);
}

export function login(email: string, password: string) {
	if (!isValid('fake_username', email, password)) return null;

	return account.createEmailSession(email, password);
}

export function isValid(username: string, email: string, password: string): boolean {
	if (username.length < 3) return false;
	if (password.length < 8) return false;
	if (username.includes(' ')) return false;
	if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) return false;

	return true;
}

export async function createNote(note: string) {
	const user = await account.get();
	return database.createDocument('notes', '646f231152e0b50ec88c', ID.unique(), {
		note,
		user: user.email,
		color: colors[random(0, colors.length)].slice(0, 1),
		border: random(1, 5)
	});
}

export function updateNote(id: string, note: {color: string, value: string}) {
	return database.updateDocument('notes', '646f231152e0b50ec88c', id, {note: note.value, color: note.color});
}

export async function getNotes() {
	const user = await account.get();
	return database.listDocuments('notes', '646f231152e0b50ec88c', [Query.equal('user', user.email)]);
}

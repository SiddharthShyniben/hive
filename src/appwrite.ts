import { Account, Avatars, Client, Databases, ID, Permission } from 'appwrite';

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('hive');
const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);
export default client;
export { account, avatars };

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
	database.createDocument(
		'notes',
		'646f231152e0b50ec88c',
		ID.unique(),
		{
			note,
			user: user.email
		}
	)
}

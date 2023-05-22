import { Account, Client, ID } from 'appwrite';

const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject('hive');
const account = new Account(client);

export default client;
export {account};

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
	if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) return false;

	return true;
}

import {Client} from 'appwrite';

const client = new Client()
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject('hive');

export default client;
// TODO: Create helper functions

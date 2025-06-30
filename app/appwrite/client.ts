import { Client, Account, Databases ,Storage} from 'appwrite';

// import all env variabe 
export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
    databaseId: import.meta.env.VITE_APPWRITE_DATABSE_ID,
    tripsCollectionId: import.meta.env.VITE_APPWRITE_TRIPS_COLLECTION_ID,
    usersCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
    apiEndpoint: import.meta.env.VITE_APPWRITE_API_ENDPOINT,
}

const client = new Client()
    .setEndpoint(appwriteConfig.apiEndpoint)
    .setProject(appwriteConfig.projectId) 

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export {client,account,database,storage}
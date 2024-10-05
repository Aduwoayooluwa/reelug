import { Account, Client, Databases } from "appwrite";
import { APPWRITE_ID, APPWRITE_URI } from "./env.config";

const client = new Client();

client.setEndpoint(APPWRITE_URI).setProject(APPWRITE_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from "appwrite";

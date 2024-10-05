import { account, databases, ID } from "../config/appwrite.config";
import { AppwriteException, Query } from "appwrite";
import { DATABASE_ID, USER_COLLECTION_ID } from "../config/env.config";
import { message } from "antd";

export const checkActiveSession = async () => {
  try {
    const session = await account.getSession("current");
    return session !== null;
  } catch (error) {
    if (error instanceof AppwriteException && error.code === 401) {
      return false;
    }
    throw error;
  }
};

export const deleteSessions = async () => {
  try {
    const deleteCurrentSession = await account.deleteSession("current");

    return deleteCurrentSession;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error deleting sessions:", error.message);
    } else {
      console.error("Error deleting sessions:", String(error));
    }
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const user = await account.get();
    console.log("user", user);
    return user;
  } catch (error) {
    console.error("Error getting user details:", error);
    throw error;
  }
};

export const saveUserInDb = async (user: {
  username: string;
  email: string;
  userId: string;
}) => {
  try {
    // Create a new document in the 'users' collection
    const response = await databases.createDocument(
      DATABASE_ID,
      USER_COLLECTION_ID,
      ID.unique(),
      {
        username: user.username,
        email: user.email,
        userId: user.userId,
      }
    );

    console.log("User saved successfully:", response);
    return response;
  } catch (error) {
    console.error("Error saving user to database:", error);
    throw error;
  }
};

export const getCurrentUserdetails = async () => {
  try {
    // First, get the current user's ID
    const currentUser = await account.get();
    const userId = currentUser.$id;

    // Query the database to find the user document
    const response = await databases.listDocuments(
      DATABASE_ID,
      USER_COLLECTION_ID,
      [Query.equal("userId", userId)]
    );

    if (response.documents.length > 0) {
      // Return the first matching document
      return response.documents[0];
    } else {
      message.error("User details not found.");
      throw new Error("User details not found in the database");
    }
  } catch (error) {
    console.error("Error fetching current user details:", error);
    throw error;
  }
};

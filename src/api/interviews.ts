import { Interview } from "../types/interview";
import axios from "axios";

export const fetchInterviews = async (): Promise<Interview[]> => {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          title: "Frontend Developer Interview",
          date: "2023-06-15",
          time: "10:00",
          candidate: "John Doe",
        },
        {
          id: "2",
          title: "Backend Developer Interview",
          date: "2023-06-16",
          time: "14:00",
          candidate: "Jane Smith",
        },
      ]);
    }, 1000);
  });
};

export const scheduleInterview = async (
  interview: Omit<Interview, "id">
): Promise<Interview> => {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const newInterview: Interview = {
        id: Date.now().toString(),
        ...interview,
      };
      resolve(newInterview);
    }, 1000);
  });
};

export const updateInterview = async (
  interview: Interview
): Promise<Interview> => {
  try {
    const response = await axios.put(
      `/api/interviews/${interview.id}`,
      interview
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "Failed to update interview"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

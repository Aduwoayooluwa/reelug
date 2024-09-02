import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { API_KEY, N_BASE_URL } from "../config/env.config";

interface GetTokenParams {
  code: string;
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}


interface TokenResponse {
  access_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
  grant_id: string;
}


export const useGetToken = (): UseMutationResult<TokenResponse, AxiosError, GetTokenParams> => {
  const mutation = useMutation<TokenResponse, AxiosError, GetTokenParams>({
    mutationKey: ["getToken"],
    mutationFn: async ({ code, clientId, clientSecret, redirectUri }: GetTokenParams): Promise<TokenResponse> => {
      const response = await axios.post<TokenResponse>(`${N_BASE_URL}/v3/connect/token`, {
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
    }, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
        },
    });
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("grant_id", data.grant_id);
      console.log("Token fetched successfully", data);
    },
    onError: (error: AxiosError) => {
      console.error("Error fetching token:", error.message);
    },
  });

  return mutation;
};

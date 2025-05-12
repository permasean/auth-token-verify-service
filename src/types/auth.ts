export interface VerifyTokenRequest {
  token: string;
  uid: string;
}

export interface VerifyTokenResponse {
  isValid: boolean;
  error?: string;
} 
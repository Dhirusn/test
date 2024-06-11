export interface IToken {
    accessToken: string;
    refreshToken: string;
    expires: string;
    expiresAt: number;
    scope: string;
    email: string;
    userid: number;
    name: string;
    role: string;
    customerId: number;
  }
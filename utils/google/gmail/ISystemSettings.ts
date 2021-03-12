interface Auth {
  type: string;
  user: string;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  accessToken: string;
}

export interface ISystemSettings {
  SmtpFromAddress: string;
  service: string;
  auth: Auth;
}

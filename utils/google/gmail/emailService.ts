import * as nodemailer from "nodemailer";
import { ISystemSettings } from "./ISystemSettings";

export class GMAILService {
  private _transporter: nodemailer.Transporter;
  private _settings: ISystemSettings;

  constructor(settings: ISystemSettings) {
    this._settings = settings;
    this._transporter = nodemailer.createTransport({
      service: this._settings.service,
      auth: {
        type: this._settings.auth.type,
        user: this._settings.auth.user,
        clientId: this._settings.auth.clientId,
        clientSecret: this._settings.auth.clientSecret,
        refreshToken: this._settings.auth.refreshToken,
        accessToken: this._settings.auth.accessToken,
      },
    });
  }

  sendMail(to: string, subject: string, content: string): Promise<void> {
    let options = {
      from: this._settings.SmtpFromAddress,
      to: to,
      subject: subject,
      text: content,
      html: content,
    };

    return new Promise<void>(
      (resolve: (msg: any) => void, reject: (err: Error) => void) => {
        this._transporter.sendMail(options, (error, info) => {
          if (error) {
            reject(new Error(JSON.stringify(error, null, 2)));
          }
          resolve(info);
        });
      }
    ).catch((err: any) => {
      throw new Error(JSON.stringify(err, null, 2));
    });
  }
}

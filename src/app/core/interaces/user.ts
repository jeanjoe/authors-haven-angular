export class User {
  status: boolean;
  message: string;
  user: {
    // tslint:disable-next-line: variable-name
    _id: string;
    username: string;
    email: string;
    // tslint:disable-next-line: variable-name
    account_type: string;
    createdAt: Date;
    updatedAt: Date;
  };
  token: string;
}

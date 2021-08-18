export interface ISourceControl {
  name: string;
  url: string;
  type: 'public' | 'private';
}

export interface IAuthState {
  token: string | null;
  isAuthenticated: boolean;
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  url: string;
  source: ISourceControl;
  status: string;
  startedAt: string | Date;
  completedAt: string | Date | null;
}

export interface IEntry {
  id?: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  diary: IDiary[] | null;
}

export interface IDiary {
  id?: string;
  title: string;
  type: 'private' | 'public';
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  entries: IEntry[] | null;
}

export interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  username?: string;
  email: string;
  password?: string;
  phoneNumber: string;
  projects: IProject[];
  diaries: IDiary[];
}

export type RootState = {
  auth: {
    token: string | null;
    isAuthenticated: boolean;
  };
  projects: IProject[];
  user: IUser | null;
};

export interface ILogin {
  username: string;
  password: string;
}

export interface IUserState {
  user: IUser | null;
}

export interface IAuthError {
  message: string;
}

export interface ICurrentUser {
  id: string;
  display_name: string;
  email: string;
  photo_url?: string;
}

export interface IContext {
  user?: IUser | null;
  isAuthenticated?: boolean;
}

export interface IHeadProps {
  title?: string;
  metaTitle?: string;
  copyright?: string;
  language?: string;
  keywords?: string;
  description?: string;
  author?: string;
  url?: string;
  ogImage?: string;
}

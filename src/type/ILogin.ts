export interface ILogin {
  user: string;
  userId: string;
  setEmail: React.Dispatch<React.SetStateAction<string>> | (() => void);
  setPassword: React.Dispatch<React.SetStateAction<string>> | (() => void);
  emailError: string;
  passwordError: string;
  handleLogin?: (e: React.FormEvent<HTMLFormElement>) => void | (() => void);
  handleSignUp?: (e: React.FormEvent<HTMLFormElement>) => void | (() => void);
  handleLogout: () => void;
  authListener: () => void;
  clearErrors: () => void;
}

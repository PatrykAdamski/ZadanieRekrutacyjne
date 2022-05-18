export interface ILogin {
  handleLogin?: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSignUp?: (e: React.FormEvent<HTMLFormElement>) => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  emailError: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  passwordError: string;
  clearErrors: () => void;
}

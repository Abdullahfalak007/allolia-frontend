// src/constants/types.ts

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export type InputFieldProps = {
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export type ErrorMessageProps = {
  message: string;
};

export type FormField = {
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FormProps = {
  fields: FormField[];
  onSubmit: (e: React.FormEvent) => void;
  buttonText: string;
  loading?: boolean;
  error?: string;
  success?: string;
  children?: React.ReactNode;
  buttonLoadingText?: string;
  header?: React.ReactNode;
  extra?: React.ReactNode;
};

export type FormHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export interface IInputForm {
  name: string;
  type: string;
  value?: string;
  onAction?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

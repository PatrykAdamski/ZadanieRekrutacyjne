export interface IBook {
  count: number;
  next: string;
  previous: string | null;
  results: {
    id: number;
    type: string;
    title: string;
    description: string;
    languages: string;
    agents: { id: number; person: string; type?: string }[];
    resources: { id: number; uri: string; type?: string }[];
    [key: string]: any;
  }[];
}

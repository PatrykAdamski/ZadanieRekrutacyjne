export interface IBookProps {
  id?: string;
  title?: string;
  languages?: string;
  authors?: { id: number; person: string }[];
  resources?: { uri: string }[];
  authorId?: string;
  linkToBook?: string;
  imageBook?: string;
}

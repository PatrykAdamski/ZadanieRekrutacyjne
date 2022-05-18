import fire from '../firebase/config';

export const addBookToFavorites = async (
  title?: string,
  languages?: string,
  authors?: { id: number; person: string }[],
  linkToBook?: string,
  image?: string,
  authorId?: string
) => {
  const item = await fire.firestore().collection('Books').add({
    authorId,
    title,
    languages,
    authors,
    linkToBook,
    imageBook: image,
  });
  console.log('work');
};

import fire from '../firebase/config';

export const removeBookFromFavorites = async (id: string | undefined) => {
  await fire.firestore().collection('Books').doc(id).delete();
};

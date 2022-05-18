import React, { useEffect, useState } from 'react';
import fire from '../../firebase/config';
import { Book } from '../../components/book/Book';
import { useAuth } from '../../hooks/useAuth';
import { IBookProps } from '../../type/IBookProps';

export const Favorites = () => {
  const [followBooks, setFollowBooks] = useState<IBookProps[]>([]);
  const auth = useAuth();

  useEffect(() => {
    const followCollection = fire
      .firestore()
      .collection('Books')
      .onSnapshot((snapshot) => {
        if (snapshot.size) {
          let tab: any = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            if (data.authorId === auth.userId)
              tab.push({ id: doc.id, ...doc.data() });
          });
          setFollowBooks(tab);
        }
      });
    return () => {
      followCollection();
    };
  }, []);
  return (
    <section className="favorites">
      <>
        {followBooks.length ? (
          followBooks.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              authorId={book.authorId}
              title={book.title}
              languages={book.languages}
              authors={book.authors}
              linkToBook={book.linkToBook}
              imageBook={book.imageBook}
            />
          ))
        ) : (
          <h2 className="favorites__heading">No books</h2>
        )}
      </>
    </section>
  );
};

import { useState, useEffect } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

function App() {
  const [bookName, setBookName] = useState('');
  const [bookPages, setBookPages] = useState('');
  const [bookAuthorId, setBookAuthorId] = useState('');
  const [addBook, { data: addedBookData }] = useMutation(gql`
    mutation ($input: BookInput!) {
      addBook(input: $input) {
        id
        name
      }
    }
  `);

  const { loading, error, data } = useQuery(gql`
    {
      books {
        name
        pages
      }
    }
  `);

  useEffect(() => {
    console.log('addedBookData', addedBookData);
  }, [addedBookData]);

  return (
    <>
      <div>
        {loading
          ? 'fetching data...'
          : data.books.map((book, i) => {
              return (
                <div key={i}>
                  <h1>{book.name}</h1>
                  <p>Pages: {book.pages}</p>
                </div>
              );
            })}
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            console.log(bookName, +bookPages, +bookAuthorId);

            addBook({
              variables: {
                input: {
                  name: bookName,
                  pages: +bookPages,
                  authorId: +bookAuthorId,
                },
              },
            });
          }}
        >
          <input
            type="text"
            placeholder="book name"
            onChange={(e) => setBookName(e.target.value)}
          />
          <input
            type="number"
            placeholder="book pages"
            onChange={(e) => setBookPages(e.target.value)}
          />
          <input
            type="number"
            placeholder="book author id"
            onChange={(e) => setBookAuthorId(e.target.value)}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
}

export default App;

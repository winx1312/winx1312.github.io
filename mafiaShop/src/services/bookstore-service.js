
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Sicilian',
      author: 'Mario Puzo',
      price: 36,
      coverImage: 'http://loveread.ec/img/photo_books/12881.jpg'},
    {
      id: 2,
      title: 'The Godfather',
      author: 'Mario Puzo',
      price: 40,
      coverImage: 'https://img4.labirint.ru/rc/fea3b802c71f5de630f35117801efaf8/220x340/books14/130642/cover.jpg?1280394613'}
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
          resolve(this.data);
      }, 700);
    });
  }
}
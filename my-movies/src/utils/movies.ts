export interface IMovie {
  name: string;
  releaseDate: Date;
  imageUrl: string;
  userScore?: number;
}

export const initialMovies: IMovie[] = [
  {
    name: "The Shawshank Redemption",
    releaseDate: new Date("1994-09-23"),
    userScore: 9.3,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "The Godfather",
    releaseDate: new Date("1972-03-15"),
    userScore: 9.2,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "The Dark Knight",
    releaseDate: new Date("2008-07-18"),
    userScore: 9.0,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Pulp Fiction",
    releaseDate: new Date("1994-10-14"),
    userScore: 8.9,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Forrest Gump",
    releaseDate: new Date("1994-07-06"),
    userScore: 8.8,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Inception",
    releaseDate: new Date("2010-07-16"),
    userScore: 8.7,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "The Matrix",
    releaseDate: new Date("1999-03-31"),
    userScore: 8.7,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Fight Club",
    releaseDate: new Date("1999-10-15"),
    userScore: 8.8,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    releaseDate: new Date("2001-12-19"),
    userScore: 8.8,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    name: "The Silence of the Lambs",
    releaseDate: new Date("1991-02-14"),
    userScore: 8.6,
    imageUrl: "https://via.placeholder.com/150",
  },
];

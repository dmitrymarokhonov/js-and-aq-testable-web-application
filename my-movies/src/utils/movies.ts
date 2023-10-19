export interface IMovie {
  name: string;
  releaseDate: Date;
  review?: string;
  userScore?: number;
}

export const initialMovies: IMovie[] = [
  {
    name: "The Shawshank Redemption",
    releaseDate: new Date("1994-09-23"),
    userScore: 9.5,
    review:
      "An absolute masterpiece! 'The Shawshank Redemption' is a heartwarming tale of friendship and redemption, beautifully told and flawlessly executed. Morgan Freeman's narration adds a unique charm to the film. A must-watch.",
  },
  {
    name: "The Godfather",
    releaseDate: new Date("1972-03-15"),
    userScore: 9.0,
    review:
      "A cinematic classic! 'The Godfather' is a gripping, timeless epic of power, family, and crime. Marlon Brando's performance is legendary, and the film's storytelling is impeccable.",
  },
  {
    name: "The Dark Knight",
    releaseDate: new Date("2008-07-18"),
    userScore: 9.0,
    review:
      "Heath Ledger's Joker is simply astonishing! 'The Dark Knight' is a dark and thrilling superhero film that explores the complexities of heroism and villainy. Ledger's performance is chilling and unforgettable.",
  },
  {
    name: "Pulp Fiction",
    releaseDate: new Date("1994-10-14"),
    userScore: 8.5,
    review:
      "A Tarantino classic! 'Pulp Fiction' is a wild and unconventional ride through a world of crime and quirky characters. Its non-linear narrative keeps you engaged, and the dialogue is sharp and witty.",
  },
  {
    name: "Forrest Gump",
    releaseDate: new Date("1994-07-06"),
    userScore: 8.0,
    review:
      "A heartwarming journey! 'Forrest Gump' is a feel-good film with Tom Hanks delivering a remarkable performance. The story takes you through decades of American history, and it's filled with touching moments.",
  },
  {
    name: "Inception",
    releaseDate: new Date("2010-07-16"),
    userScore: 8.5,
    review:
      "Mind-bending brilliance! 'Inception' is a visually stunning and intellectually stimulating film. Christopher Nolan's direction and the concept of entering dreams make it a true cinematic experience.",
  },
  {
    name: "The Matrix",
    releaseDate: new Date("1999-03-31"),
    userScore: 8.5,
    review:
      "A groundbreaking sci-fi spectacle! 'The Matrix' redefined action filmmaking with its innovative bullet-dodging effects and cyberpunk world. Keanu Reeves shines as Neo.",
  },
  {
    name: "Fight Club",
    releaseDate: new Date("1999-10-15"),
    userScore: 8.0,
    review:
      "A thought-provoking rollercoaster! 'Fight Club' is a dark and edgy exploration of identity and consumerism. Edward Norton and Brad Pitt deliver intense performances in this mind-bending thriller.",
  },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    releaseDate: new Date("2001-12-19"),
    userScore: 8.5,
    review:
      "An epic fantasy adventure! 'The Fellowship of the Ring' is the beginning of an unforgettable journey through Middle-earth. The world-building, characters, and storytelling are all top-notch.",
  },
  {
    name: "The Silence of the Lambs",
    releaseDate: new Date("1991-02-14"),
    userScore: 7.5,
    review:
      "A bone-chilling thriller! 'The Silence of the Lambs' is a psychological masterpiece that keeps you on the edge of your seat. Anthony Hopkins as Hannibal Lecter is hauntingly brilliant.",
  },
];

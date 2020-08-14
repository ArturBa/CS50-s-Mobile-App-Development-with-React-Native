export interface Movie {
  Title: string;
  Year: string;
  Director: string;
  Poster: string;
  imdbRating: number;
  imdbVotes: string;
  Plot: string;
}

export interface MovieSearch {
  Title: string;
  Year: string;
  imdbID: string;
}

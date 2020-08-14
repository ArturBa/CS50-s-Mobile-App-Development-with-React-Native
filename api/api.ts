import { Movie } from "../interfaces/Movie";

const BASE_URL = 'http://www.omdbapi.com/?apikey=96dd2c71';

export default class ApiHelper {
  static async getMovie(movieId: string): Promise<Movie> {
    const response = await fetch(BASE_URL + '&i=' + movieId);
    const json = await response.json();
    const movie: Movie = await json;
    return movie;
  }
}



import { Movie } from "../interfaces/Movie";

const BASE_URL = 'http://www.omdbapi.com/?apikey=96dd2c71&i=tt3896198';

export default class ApiHelper {
  static async getMovie(movieid: string): Promise<Movie> {
    const response = await fetch(BASE_URL);
    const json = await response.json();
    const movie: Movie = await json;
    return movie;
  }
}



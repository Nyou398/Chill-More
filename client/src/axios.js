import axios from 'axios';

/** voici l'URL  qui permet de faire des requetes depuis la base de donnee des film s */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;
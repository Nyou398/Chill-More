import axios from 'axios';

/** voici l'URL  qui permet de faire de requete depuis la base de donnee des film  */ 

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance
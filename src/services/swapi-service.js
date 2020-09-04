export default class SwapiService {
    _apiBase  = 'https://swapi.dev/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img/';
    async getResourse (url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if(!res.ok){
        console.error(`Не могу получить информацию от ${url}, возвращает ${res.status}`)
      }
      return await res.json();
    }
  
    getAllPeople = async () => {
      const res =  await this.getResourse(`/people/`);
      return res.results.map(this._transformPeople);
    }
     getPerson = async (id) =>{
      const person = await this.getResourse(`/people/${id}`)
      return this._transformPeople(person);
    }
    getAllPlanets = async () => {
      const res =  await this.getResourse(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
     getPlanet = async (id) => {
      const planet = await this.getResourse(`/planets/${id}`);
      return this._transformPlanet(planet);
    }
    getAllStarships = async () => {
      const res =  await this.getResourse(`/starships/`);
      return res.results.map(this._transformStarships);
    }
    getStarship = async (id) =>{
      const starship = await this.getResourse(`/starships/${id}`)
      console.log(starship);
      return this._transformStarships(starship);
    }
    getPlanetImage = ({id}) => {
      return `${this._imageBase}planets/${id}.jpg` 
    }
    getPersonImage = ({id}) =>{
      return `${this._imageBase}characters/${id}.jpg`
    }
    getStarshipImage = ({id}) =>{
      return `${this._imageBase}starships/${id}.jpg`
    }

    _getIdForUrl = (item) => {
      const idRegExp = /\/([0-9]*)\/$/;
      return  item.url.match(idRegExp)[1];
    }

    _transformStarships = (starships) =>{
      return {
        id: this._getIdForUrl(starships),
        name: starships.name,
        cargoCapaciry: starships.cargo_capacity,
        length: starships.length,
        starshopClass: starships.starship_class

      }
    }
    _transformPlanet = (planet) => {
      return {
        id: this._getIdForUrl(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      }
    }
    _transformPeople = (people) => {
      return {
        id: this._getIdForUrl(people),
        name: people.name,
        birthYear: people.birth_year,
        gender: people.gender,
        eyeColor: people.eye_color,
        skinColor: people.skin_color
      }
    }
  }

import axios from "axios";

export  const  loadCityList = ({commit}) => {
  let cityData = [];
  axios
    .get('https://api.npoint.io/c57c8a48d8971bd859fe')
    .then(response => (cityData = response.data))
    .then(response => {
      commit('loadCityList', cityData);
    });
}



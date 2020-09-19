import axios from "axios";

export default {
  getRegion: (region) =>
    axios({
      "method": "GET",
      "url": "https://coronavirus-map.p.rapidapi.com/v1/summary/region",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
        "x-rapidapi-key": "0aa3f25180msh76e118582c50a44p19178djsna4b1193c345a",
        "useQueryString": true
      }, "params": {
        "region": region

      }
    }),


  // Is this where we are calling the mongo db on the infoseed
  //   // Gets all info
  

      getInfo: function () {
        return axios.get("/api/info");
      },
    
}
  

  

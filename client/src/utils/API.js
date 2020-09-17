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


  // Is this where we are calling the mongo db on the infoseed?
  //   // Gets all info
  
	// getInfo: function () {
  //       return axios.get("/api/info");
  //     },
      // Gets the info with the given id
      getInfo: function (id) {
        return axios.get("/api/info/" + id);
      },
      updateInfo: function (id, infoData) {
        return axios.put("/api/info/" + id, infoData);
      },
      // Deletes the info with the given id
      deleteInfo: function (id) {
        return axios.delete("/api/info/" + id);
      },
      // Saves an info to the database
      saveinfo: function (infoData) {
        return axios.post("/api/info", infoData);
      },
}
  

  

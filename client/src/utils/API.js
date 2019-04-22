import axios from "axios";

// create function to call api and export. import in register component

export default {
    getOneTutor: function(email){
        return axios.get("/api/tutor/" + email);
    },
    updateTutor: function(id, data){
        return axios.put("/api/tutor/"+id, data)
    },
    getFromGeo: function(search){
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=AIzaSyBBU1xVisZcgNbmIYreSZJEfrfGTFV18-k`)
    }
}
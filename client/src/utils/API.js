import axios from "axios";

// create function to call api and export. 
export default {
    getOneTutor: function(email){
        return axios.get("/api/tutor/" + email);
    },
    getOneTutorid: function(id){
        return axios.get("/api/tutorid/" + id);
    },
    updateTutor: function(id, data){
        return axios.put("/api/tutor/"+id, data)
    },
    getRemote: function(){
        return axios.get("/api/remote/");
    },
    getInperson: function(){
        return axios.get("/api/inperson/");
    },
    getInpersonTutor: function(){
        return axios.get("/api/inpersontutor/");
    },
    getFromGeo: function(search){
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=AIzaSyBBU1xVisZcgNbmIYreSZJEfrfGTFV18-k`)
    },
    postImage: function (formData){
        return axios.post("/api/imageupload/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'}
        })
    },
    sendgrid: function(data){
        return axios.post("/api/send/", data)
    }
}
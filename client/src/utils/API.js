import axios from "axios";

// create function to call api and export. import in register component

export default {
    getOneTutor: function(email){
        return axios.get("/api/tutor/" + email);
    }
}
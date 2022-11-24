import axios from "axios";

export default {
    login: async (credentials) => {
        return (await axios.post('/api/login', credentials)).data;
    }
}
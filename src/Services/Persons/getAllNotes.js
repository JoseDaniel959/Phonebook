import axios from "axios";

const getAllNotes = () =>{
    return axios.get('http://localhost:3000/api/persons')
    .then(response =>{
        const {data} = response;
        return data
    })
}




export default getAllNotes;
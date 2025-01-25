import axios from "axios";
const createPerson = (Person) =>{
    
    axios.post('http://localhost:3000/api/persons',Person)
    .then(response => {
        const {data} = response;
        return data;


    })
}
export default createPerson;
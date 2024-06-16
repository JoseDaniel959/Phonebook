import axios from "axios";
const createPerson = (Person) =>{
    
    axios.post('http://localhost:3001/persons',Person)
    .then(response => {
        const {data} = response;
        return data;


    })
}
export default createPerson;
import axios from "axios"
const deletePerson = (id) =>{
    axios.delete('http://localhost:3001/persons/'+id)
}

export default deletePerson;
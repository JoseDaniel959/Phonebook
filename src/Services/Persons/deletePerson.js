import axios from "axios"
const deletePerson = (id) =>{
    console.log(typeof(id))
    axios.delete('http://localhost:3000/api/persons/'+id)
}

export default deletePerson;
import React, { useState,useEffect } from "react";
import  getAllNotes from "./Services/Persons/getAllNotes.js"
import createPerson from "./Services/Persons/createPerson.js";
import deletePerson from "./Services/Persons/deletePerson.js";

const App = () => {
  /*const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);*/

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState();
  const [filterName, setFilterName] = useState("");


  useEffect(() => {
    getAllNotes().then((persons) =>{
      setPersons(persons);
    })
  }, [])


  const handleInputNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleInputNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleInputFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };

  
  const filteredPersons = persons.filter((person) =>
    person.name.toUpperCase().includes(filterName.toUpperCase())
  );
  console.log("filtered people ", filteredPersons.length);
  //const personstoShow = persons : fitleredPersons.length ;

  const addName = (event) => {
    //event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    let ObjectInArray = persons.some(
      (person) => person.name === newPerson.name
    );

    if (ObjectInArray) {
      alert(newName + " is alredy added to the list");
    } else {
      //setPersons([...persons, newPerson]);
      //axios.post('http://localhost:3001/persons',newPerson)
      createPerson(newPerson)
    }

    setNewName("");
    setNewNumber();
  };

  const deleteName = (id) =>{
    deletePerson(id)
    
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with:{" "}
        <input value={filterName} onChange={handleInputFilterNameChange} />
      </div>
      <h2>Add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleInputNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleInputNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={addName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <div key = {person._id}>
        <p >
          {person.name} {person.phonenumber}
           <button onClick={() => deleteName(person._id)}> delete</button>
        </p> 
        </div>

      ))}
    </div>
  );
};

export default App;

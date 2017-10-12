import React from 'react';
import {Table, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap'

class PersonDetails extends React.Component {

    state = {
        persons: [],
        savePersons: JSON.parse(localStorage.getItem('addedPersons')) || [],
        finalPerson: null
    };

    componentDidMount() {
        fetch
        (`${process.env.PUBLIC_URL}/data/MOCK_DATA.json`)
            .then(
                response => response.json()
            ).then(
            persons => {
                console.log(persons, this.props.match.params.id);
                persons = persons.concat(this.state.savePersons);
                persons = persons.filter((person) => {
                    return person.id === parseInt(this.props.match.params.id)
                });
                this.setState({persons: persons, finalPerson: persons[0]})
            }
        )
    }

    render() {
        // console.log(this.state.finalPerson);


        return (
            <div>
                {this.state.finalPerson ? <div>
                        <ul>
                            <li>{this.state.finalPerson.id}</li>
                            <li>{this.state.finalPerson.first_name}</li>
                            <li>{this.state.finalPerson.last_name}</li>
                            <li>{this.state.finalPerson.email}</li>
                            <li>{this.state.finalPerson.phone}</li>
                            <li>{this.state.finalPerson.proffesion}</li>
                        </ul>
                    </div>
                    : 'Ładowanie..'}
            </div>

        )
    }
}
            // person === null ?
            //     <div>
            //         <h1>Informacje o pracowniku</h1>
            //         <div>
            //             <h2>{person.name}</h2>
            //
            //         </div>
            //         <img src={require('./facet.jpeg')} style={{width: 300, height: 200}}/>
            //         <Table striped bordered condensed hover style={{
            //             marginTop: 50
            //         }}>
            //
            //             <thead>
            //             <tr>
            //                 <th>Imię</th>
            //                 <th>Nazwisko</th>
            //                 <th>Profesja</th>
            //                 <th>Wiek</th>
            //                 <th>Adres</th>
            //                 <th>Adres email</th>
            //                 <th>Telefon</th>
            //             </tr>
            //             </thead>
            //             <tbody>
            //
            //             <tr>
            //                 <td>
            //                     {person.first_name}
            //                 </td>
            //                 <td>
            //                     {person.last_name}
            //                 </td>
            //                 <td>
            //                     {person.proffesion}
            //                 </td>
            //                 <td>
            //                     {person.age}
            //
            //                 </td>
            //                 <td>
            //                     {person.adress}
            //                 </td>
            //                 <td>
            //                     {person.email}
            //                 </td>
            //                 <td>
            //                     {person.phone}
            //                 </td>
            //             </tr>
            //             </tbody>
            //         </Table>
            //         <div>
            //             <h2>
            //                 O MNIE
            //             </h2>
            //             <p>
            //                 Bacon ipsum dolor amet cow beef corned beef turkey cupim meatloaf ribeye leberkas shankle
            //                 porchetta.
            //                 Corned beef pork loin short ribs picanha, flank doner cow biltong brisket bresaola
            //                 burgdoggen alcatra.
            //                 Ball tip landjaeger porchetta beef ribs bacon alcatra. Landjaeger beef rump
            //                 ribeye doner. Cupim short ribs pork, ball tip tail brisket pastrami pork belly chicken
            //                 drumstick.
            //                 Meatloaf cupim pig chicken, picanha meatball shank pork belly strip steak turducken capicola
            //                 chuck ribeye ham hock jerky.
            //             </p>
            //
            //         </div>
            //
            //         <ButtonGroup vertical block>
            //             <Button>DODAJ PRACOWNIKA DO GRUPY</Button>
            //         </ButtonGroup>
            //     </div>
            //     : <p>blad</p>
//         )
//     }
// }

export default PersonDetails
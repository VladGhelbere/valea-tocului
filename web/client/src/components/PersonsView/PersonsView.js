import React from 'react'
import './PersonsView.css';
import PersonCard from './PersonCard/PersonCard'
import { persons } from '../../common/Locale';

export default function PersonsView() {
    return (
        <div className='team-container' >
            <div className='team-title'>
                <span>Echipa noastră</span>
                <h2>Făuritorii gustului</h2>
            </div>
            <div className='cards-container'>
                {
                    persons.map((person, i) => <PersonCard image={person.image} name={person.name} description={person.description} title={person.title} key={i} />)
                }
            </div>
        </div>
    )
}

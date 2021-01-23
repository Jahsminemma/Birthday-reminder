import React, {useState} from 'react'


const Birthdays = () => {
    
    const [people, setPeople] = useState([
        { name: 'Brtie Yates',id:1, age: 29, image :"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg" },
        { name: 'Haster Hogan', id:2, age: 32, image :"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg" },
        { name: 'Larry Little',id:3,  age: 36, image :"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg" },
        { name: 'Sean Walsh', id:4, age: 34, image :"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg" },
        { name: 'Lola  Gardener', id:5, age: 29, image :"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg" },
    ]);
    return ( 
        <div className="inner-container">
            <h2 className="header-title">{ people.length} Birthdays Today</h2>
            {people.map(person => {
                
                return (
                    
                    <div className ="container">
                        <div className="image">
                            <img src={person.image} alt="" />
                         </div>
                            <div className="name">
                                <h3>{person.name}</h3>
                                <p>{person.age} years</p>
                         
                        </div>
                    </div>
               )
            })}
           <button onClick={()=> setPeople([])} className="btn">Clear All</button> 
        </div>
    )
}

export default Birthdays

import propTypes from 'prop-types'
const Person = (props) =>{
    return(
        <div>
            <h1>Name:{props.name}</h1>
            <h1>Email:{props.email}</h1>
            <h1>Age:{props.age}</h1>
            <h1>This person {props.isMarried ? "is" : "is not "} MARRIED</h1>
            {props.friends.map((friend)=>(
                <h1>{friend}</h1>
            ))}

        </div>
    )
    }
        export default Person

        Person.propTypes = {
            name : propTypes.string,
            email : propTypes.string,
            age : propTypes.number,
            isMarried : propTypes.bool,
            friends : propTypes.arrayOf(propTypes.string)
        }
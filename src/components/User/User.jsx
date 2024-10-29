import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name, email} = user;
    const userStyle = {
        border: '1px solid green',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <h3>Email Address: {email}</h3>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
            <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;
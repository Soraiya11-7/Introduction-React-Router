import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    const userStyle ={
        border: '1px solid skyblue',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div>
            <h2>User Details Here</h2>
            <div style={userStyle}>
                <h2>Name: {name}</h2>
                <h2>Website: {website}</h2>
            </div>
            
        </div>
    );
};

export default UserDetails;
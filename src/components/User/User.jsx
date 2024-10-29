const User = ({user}) => {
    const {name, email} = user;
    const userStyle = {
        border: '1px solid green',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <h3>Email Address: {email}</h3>
            
        </div>
    );
};

export default User;
import { useLoaderData } from "react-router-dom";
import './User.css';
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();

    return (
        <div>
            <h2>Hello Users: {users.length}</h2>
            <div className="users">
                {
                    users.map((user) => <User key={users.id} user={user}></User>)
                }

            </div>
            
        </div>
    );
};

export default Users;

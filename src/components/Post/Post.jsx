import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    // const navigateGoBack = useNavigate();

    const handleDetails = () => {
        navigate(`/post/${id}`)
    }
  
    const postStyle = {
        border: '1px solid green',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={postStyle}>
            <h1>postId : {id}</h1>
            <h2>Title: {title}</h2>
            <Link to={`/post/${id}`}>post details</Link>
            <button onClick={handleDetails}>Click Me to see the details</button>
            
        </div>
    );
};

export default Post;
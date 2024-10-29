import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
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
        </div>
    );
};

export default Post;
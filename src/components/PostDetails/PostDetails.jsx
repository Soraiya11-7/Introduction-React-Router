import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body} = post;
    const postDetailsStyle = {
        border: '1px solid green',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={postDetailsStyle}>
            <h1>id: {id}</h1>
            <h2>Title: {title}</h2>
            <h5>Body: {body}</h5>
        </div>
    );
};

export default PostDetails;
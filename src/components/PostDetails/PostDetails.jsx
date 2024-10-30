import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigateGoBack = useNavigate();
    const {postId} = useParams();
    console.log(postId);

    const handleGoBack = () => {
        navigateGoBack(-1);
    }
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
            <button onClick={handleGoBack}>Click Me to Go Back</button>
            
        </div>
    );
};

export default PostDetails;
import { useState } from 'react';

function FindDeletePost() {
    const [postId, setPostId] = useState('');
    const [post, setPost] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle input change
    const handlePostIdChange = (event) => {
        setPostId(event.target.value);
    };


    // Form validation
    const validateForm = () => {
        if (postId.trim() === '') {
            setError('Post ID is required');
            return false;
        }
        setError('');
        return true;
    };

    // Handle form submission
    const findPost = async (event) => {
        event.preventDefault(); // Prevent default form submission

        if (!validateForm()) {
            return; // If validation fails, exit
        }

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

            if (!response.ok) {
                setPost('');
                throw new Error('Failed to find post');
            }

            const data = await response.json();
            setPost(data);
            setPostId(data.id); // we set this so we can later delete the post if we want

        } catch (error) {
            setError(error.message);
        }
    };

    const deletePost = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete post');
            }

            setSuccess(`Post #${postId} deleted successfully`);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>Find a Post</h1>
            <form onSubmit={findPost}>
                <div>
                    <label htmlFor="postId">Post ID:</label><br/>
                    <input
                        type="number"
                        id="postId"
                        value={postId}
                        onChange={handlePostIdChange}
                        placeholder="Enter post title"
                    />
                </div><br/>
                <button type="submit">Find Post</button>
            </form>

            {post && (
                <div>
                    <p><b>Post Title</b></p>
                    <p>{post.title}</p>
                    <p><b>Post Body:</b></p>
                    <p>{post.body}</p>
                    <button onClick={deletePost}>Delete Post</button>
                </div>
            )}

            {/* Display validation error or success message */}
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}
        </div>
    );
}

export default FindDeletePost;
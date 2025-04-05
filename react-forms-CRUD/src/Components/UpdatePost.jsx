import { useState } from 'react';

function UpdatePost() {
    const [formData, setFormData] = useState({
        postId: '',
        title: '',
        body: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle input change
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        // Step 3: Update the corresponding key in the state object
        setFormData((prevState) => ({
          ...prevState, // Keep the existing form data
          [name]: value, // Update the key corresponding to the input's name attribute
        }));
      };

    // Form validation
    const validateForm = () => {
        const {postId, title, body} = formData;

        if (postId.trim() === '' || title.trim() === '' || body.trim() === '') {
            setSuccess('');
            setError('Post ID, title, and body are required');
            return false;
        }
        setError('');
        return true;
    };

    const updatePost = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return; // If validation fails, exit
        }

        try {
            const {postId, title, body} = formData;

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'PUT',  // Use PUT for full replacement or PATCH for partial updates
                body: JSON.stringify({
                    id: postId,
                    title: title,
                    body: body,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to update post');
            }

            const updatedPost = await response.json();
            
            setSuccess(
                <div>
                    <p>Post #{updatedPost.id} Updated Successfully!</p>                    
                    New Title: {updatedPost.title}<br/>
                    New Body: {updatedPost.body}
                </div>
            );
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <h1>Update Post</h1>
            <form onSubmit={updatePost}>
                <div>
                    <label htmlFor="title">Post ID</label><br/>
                    <input
                        type="number"
                        id="postId"
                        name="postId"
                        value={formData.postId}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="title">Title:</label><br/>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body:</label><br/>
                    <textarea
                        id="body"
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                    />
                </div><br/>
                <button type="submit">Update Post</button>
            </form>

            {/* Display validation error or success message */}
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}
        </div>
    );
}

export default UpdatePost;
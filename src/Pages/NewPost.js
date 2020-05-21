import React from "react";

function AddNewPost () {
    return (
        <div>
            <h1>Create new post</h1>
            <p>
                <form>
                    <input type="text" placeholder="Post title goes here..." size="54"></input>
                    <br/><br/>
                    <textarea rows="8" cols="50" placeholder="Post content goes here..."></textarea>
                    <br/><br/>
                    <button type="submit">Save post</button>
                </form>
            </p>
        </div>
    )
}

export default AddNewPost;
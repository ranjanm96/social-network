
import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';

const Post = ({username, caption, imageUrl, number}) => {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt={username}
                    // src="https://www.techlifediary.com/wp-content/uploads/2020/06/react-js.png"
                    src={`/static/images/avatar/${number}.jpg`}
                />
            </div>
            <h3>{username}</h3>
            <img className="post__image" src={imageUrl} alt="React" />
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
        </div>
    );
};

export default Post;
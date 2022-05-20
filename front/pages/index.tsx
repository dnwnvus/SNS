import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';

const Home = () => {
    const { isLoggedIn } = useSelector((state: any) => state.user);   
    const { mainPosts } = useSelector((state: any) => state.post);

    return (
        <div>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((c: any) => {
                return (
                    <PostCard key={c} post={c} />
            );
        })}
        </div>
    );
};

export default Home;
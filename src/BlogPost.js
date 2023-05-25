import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from './blogdata';

function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const blogpost = blogdata.find(post => post.slug === slug );
    const returnToBlog = () => {
        navigate('/blog');
        //navigate(-1);//-1 me lleva a la url anterior
    };

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlog}>Volver al blog</button>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>
        </>
    );
}

export { BlogPost };
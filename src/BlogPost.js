import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./auth";
import { blogdata } from './blogdata';

function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const auth = useAuth();
    const blogpost = blogdata.find(post => post.slug === slug );
    const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;


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
            {canDelete && (
                <button>
                    Eliminar Blogpost
                </button>
            )}
        </>
    );
}

export { BlogPost };
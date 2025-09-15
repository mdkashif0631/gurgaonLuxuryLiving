import React from "react";
import { useParams } from "react-router-dom";
import cardsData from "../Blogs.json";
import './Blogpage.css';
import Header from "../../Header";
import Blogcards from "./Blogcards";

const BlogPage = () => {
    const { id } = useParams();
    const blog = cardsData.find((b) => b.id.toString() === id);

    if (!blog) return <p>Blog not found</p>;

    return (
        <div className="blog">
            <Header />
            <a href='/' className='logo_position fixed'>
                <img className='logo_box' src="https://res.cloudinary.com/daa1hgr9j/image/upload/v1755514395/tu9ltsfqdjmxdz9uekoo.png" alt='gll_logo' />
            </a>
            <div className="blog_img">
                <img src={blog.img} alt={blog.title} />
            </div>

            <div className="blog_details">
                <div className="blog_page">

                    <div className="blog_content">
                        <h1>{blog.title} <span>{blog.date}</span></h1>
                        <p>{blog.description}</p>
                        <div className="blog_sub_detail">
                            <h3>{blog.subheading1}</h3>
                            <p>{blog.description1}</p>
                            <h3>{blog.subheading2}</h3>
                            <p>{blog.description2}</p>
                            <h3>{blog.subheading3}</h3>
                            <p>{blog.description3}</p>
                            <p>{blog.point1}</p>
                            <p>{blog.point2}</p>
                            <p>{blog.point3}</p>
                            <p>{blog.point4}</p>
                            <p>{blog.description31}</p>
                            <h3>{blog.subheading4}</h3>
                            <p>{blog.description4}</p>
                            <h3>{blog.subheading5}</h3>
                            <p>{blog.description5}</p>
                            <h3>{blog.subheading6}</h3>
                            <p>{blog.description6}</p>
                            <h3>{blog.subheading7}</h3>
                            <p>{blog.description7}</p>
                            <h3>{blog.subheading8}</h3>
                            <p>{blog.description8}</p>
                            <h3>{blog.subheading9}</h3>
                            <p>{blog.description9}</p>
                            <h3>{blog.subheading10}</h3>
                            <p>{blog.description10}</p>
                        </div>
                        <h3>{blog.concludeheading}</h3>
                        <p>{blog.conclusion}</p>
                    </div>
                </div>
                <div className="blog_lists">
                    <Blogcards />
                </div>
            </div>

        </div>
    );
};

export default BlogPage;

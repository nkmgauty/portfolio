import React from 'react'
import "../../Assets/CSS/Blog.css"
import Nav from '../Nav/Nav'
import portimg1 from "../../Assets/images/Portfolio-01-768x512.jpg";
import portimg2 from "../../Assets/images/Portfolio-02-768x512.jpg";
import portimg3 from "../../Assets/images/Portfolio-03-768x512.jpg";
import portimg4 from "../../Assets/images/Portfolio-04-768x512.jpg";
import portimg5 from "../../Assets/images/Portfolio-05-768x512.jpg";
import portimg6 from "../../Assets/images/Portfolio-06-768x512.jpg";



const Blog = () => {
  return (
    <>
    <div className='blogmain'>
        <Nav />
<div className='bloghead'>
<h3>PASSION MIXED WITH EXPERIENCE</h3>
<h1>DESIGNED WITH CARE,</h1>
<h1>FILLED WITH CREATIVE ELEMENTS.</h1>
</div>

<div className="bloggrid">
            <div className="blogImggrid">
<div className="bloggridcont">
    <img className="bloggridimg" src={portimg1}></img>
    <h3>LGITUR NEQUE STULTORUM</h3>
    <p>Brand Identity / Web Design</p>
</div>


<div className="bloggridcont">
    <img className="bloggridimg" src={portimg2}></img>
    <h3>LGITUR NEQUE STULTORUM</h3>
    <p>Brand Identity / Web Design</p>
</div>

<div className="bloggridcont">
    <img className="bloggridimg" src={portimg3}></img>
    <h3>LGITUR NEQUE STULTORUM</h3>
    <p>Brand Identity / Web Design</p>
</div>

<div className="bloggridcont">
    <img className="bloggridimg" src={portimg4}></img>
    <h3>LGITUR NEQUE STULTORUM</h3>
    <p>Brand Identity / Web Design</p>
</div>

<div className="bloggridcont">
    <img className="bloggridimg" src={portimg5}></img>
    <h3>LGITUR NEQUE STULTORUM</h3>
    <p>Brand Identity / Web Design</p>
</div>

<div className="bloggridcont">
    <img className="bloggridimg" src={portimg6}></img>
    <h3>LGITUR NEQUE STULTORUM</h3>
    <p>Brand Identity / Web Design</p>
</div>
</div>
        </div>
    </div>
    </>
  )
}

export default Blog
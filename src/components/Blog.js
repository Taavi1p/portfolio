import React from 'react';
import '../styles/blog.css';
import BlogPost from "./BlogPost";

function Blog() {
  return (
    <div className="blog-page">
      <BlogPost 
        title="Optics thought experiment" 
        content="Imagine a scenario where there is an electron moving back and forth and emits an photon. The photon then is absorbed by a photovoltaic that then powers
        a tractor that starts moving. Now consider a observer that is in the electrons refrence frame and thus for him the electron does not move and thus it also does 
        not emit a photon. The questions is: does the tractor move for this observer?"
      />
    </div>
);
}

export default Blog;
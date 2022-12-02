import React from 'react';

const Banner = () => {
    return (
        // <div className="hero min-h-[70vh] bg-base-200 dark:bg-gray-800 dark:text-gray-100" style={{ backgroundImage: `url("https://images.wallpapersden.com/image/download/programming-coding-language_bGhpbm6UmZqaraWkpJRmbmdlrWZlbWU.jpg")` ,  }}>
        //     <div className="hero-content text-center">
        //         <div className="max-w-lg ">
        //             <h1 className="text-5xl font-bold text-white">Welcome To Fun Code</h1>
                     
        //         </div>
        //     </div>
        // </div>
        <div className="hero min-h-[70vh] bg-base-200" style={{ backgroundImage: `url("https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?b=1&s=170667a&w=0&k=20&c=iQE4in2blXsYoRYjoX7F8e4AFF6kOaE-TZiVNMPQ5kI=")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome To Code World</h1>
        
          </div>
        </div>
      </div>
   
   
        );
};

export default Banner;
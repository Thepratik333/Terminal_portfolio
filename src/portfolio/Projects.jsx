import React from 'react';

function Projects() {
  return (
    <div className="terminal">
      <h1 className='mx-2 mt-4 mb-6 text-lg'>My Projects ----------</h1>
      <div className="projectContainer grid grid-cols-3 gap-4 justify-items-center items-center">
        <div className="box bg-gray-800 p-4 rounded-lg">
          <p className='text-lg font-medium'>E-commerce website</p>
          <p className='text-yellow-500 text-[1.6rem]'><i className="fab fa-html5"></i>&nbsp;<i className="fab fa-css3-alt"></i>&nbsp;<i className="fab fa-js-square"></i>&nbsp;<i className="fab fa-php"></i>&nbsp;<i className="fas fa-database"></i></p>
        </div>
        <div className="box bg-gray-800 p-4 rounded-lg">
          <p className='text-lg font-medium'>News website</p>
          <p className='text-yellow-500 text-[1.6rem]'><i className="fab fa-html5"></i>&nbsp;<i className="fab fa-css3-alt"></i>&nbsp;<i className="fab fa-js-square"></i>&nbsp;<i className="fab fa-react"></i></p>
        </div>
        <div className="box bg-gray-800 p-4 rounded-lg">
          <p className='text-lg font-medium'>Todos list</p>
          <p className='text-yellow-500 text-[1.6rem]'><i className="fab fa-html5"></i>&nbsp;<i className="fab fa-css3-alt"></i>&nbsp;<i className="fab fa-js-square"></i>&nbsp;<i className="fab fa-react"></i>&nbsp;<i className="fas fa-database"></i>&nbsp;<i className="fab fa-node"></i></p>
        </div>
        <div className="box bg-gray-800 p-4 rounded-lg">
          <p className='text-lg font-medium'>Currency/Language converter</p>
          <p className='text-yellow-500 text-[1.6rem]'><i className="fab fa-html5"></i>&nbsp;<i className="fab fa-css3-alt"></i>&nbsp;<i className="fab fa-js-square"></i>&nbsp;<i className="fab fa-react"></i></p>
        </div>
        <div className="box bg-gray-800 p-4 rounded-lg">
          <p className='text-lg font-medium'>Word Counter</p>
          <p className='text-yellow-500 text-[1.6rem]'><i className="fab fa-html5"></i>&nbsp;<i className="fab fa-css3-alt"></i>&nbsp;<i className="fab fa-js-square"></i>&nbsp;<i className="fab fa-react"></i></p>
        </div>
        <div className="box bg-gray-800 p-4 rounded-lg">
          <p className='text-lg font-medium'>and Many More...</p>
          <p className='text-yellow-500 text-[1.6rem]'><i className="fas fa-tasks"></i></p>
        </div>
      </div>
    </div>
  );
}

export default Projects;

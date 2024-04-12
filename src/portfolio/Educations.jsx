import React from 'react';

function Education() {
    return (
        <div className="educationContainer bg-gray-900 p-6 rounded-lg font-mono">
            <h1 className="text-3xl font-semibold text-blue-400">Education</h1>
            <div className="w-full h-0.5 bg-white my-4"></div>
            <div className="educationEntry">
                <p className="text-lg text-gray-300">Govt. Senior School Partapur, Rajasthan</p>
                <p className="text-gray-400">High School Diploma</p>
            </div>
            <div className="educationEntry">
                <p className="text-lg text-gray-300">Indus University, Ahmedabad, Gujarat</p>
                <p className="text-gray-400">Bachelor of Computer Application</p>
            </div>
        </div>
    );
}

export default Education;

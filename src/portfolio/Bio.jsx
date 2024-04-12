import React from 'react';
import pratik from './pratik1.jpg';

function Bio() {
    return (
        <div className="bioContainer bg-gray-800 p-6 rounded-lg">
            <div className="profile flex items-center">
                <img src={pratik} alt="" className="profilePic h-36 w-36 rounded-full border-yellow-500 border" />
                <div className="profileInfo pl-4">
                    <h1 className="name text-3xl flex items-center text-purple-300">Pratik Panchal
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-500 text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.03 9.78a.75.75 0 0 0-1.06-1.06l-5.47 5.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6-6Z"></path><path d="m14.136 1.2 1.375 1.01c.274.201.593.333.929.384l1.687.259a3.61 3.61 0 0 1 3.02 3.021l.259 1.686c.051.336.183.655.384.929l1.01 1.375a3.61 3.61 0 0 1 0 4.272l-1.01 1.375a2.106 2.106 0 0 0-.384.929l-.259 1.687a3.61 3.61 0 0 1-3.021 3.02l-1.686.259a2.106 2.106 0 0 0-.929.384l-1.375 1.01a3.61 3.61 0 0 1-4.272 0l-1.375-1.01a2.106 2.106 0 0 0-.929-.384l-1.687-.259a3.61 3.61 0 0 1-3.02-3.021l-.259-1.686a2.117 2.117 0 0 0-.384-.929L1.2 14.136a3.61 3.61 0 0 1 0-4.272l1.01-1.375c.201-.274.333-.593.384-.929l.259-1.687a3.61 3.61 0 0 1 3.021-3.02l1.686-.259c.336-.051.655-.183.929-.384L9.864 1.2a3.61 3.61 0 0 1 4.272 0Zm-3.384 1.209-1.375 1.01a3.614 3.614 0 0 1-1.59.658l-1.686.258a2.111 2.111 0 0 0-1.766 1.766l-.258 1.686a3.61 3.61 0 0 1-.658 1.589l-1.01 1.376a2.11 2.11 0 0 0 0 2.496l1.01 1.375c.344.469.57 1.015.658 1.59l.258 1.686c.14.911.855 1.626 1.766 1.766l1.686.258a3.61 3.61 0 0 1 1.589.658l1.376 1.01a2.11 2.11 0 0 0 2.496 0l1.375-1.01a3.613 3.613 0 0 1 1.59-.657l1.686-.26a2.11 2.11 0 0 0 1.766-1.765l.258-1.686a3.61 3.61 0 0 1 .658-1.589l1.01-1.376a2.11 2.11 0 0 0 0-2.496l-1.01-1.375a3.613 3.613 0 0 1-.657-1.59l-.26-1.686a2.11 2.11 0 0 0-1.765-1.766l-1.686-.258a3.61 3.61 0 0 1-1.589-.658l-1.376-1.01a2.11 2.11 0 0 0-2.496 0Z"></path></svg></h1>

                    <h1 className="age text-lg text-gray-400">Age: 22 years old</h1>
                </div>
            </div>
            <div className="summary text-gray-300 mt-4">
                "Hi there, I am a Full Stack Developer. Passionate with web development and like to learn new things related to coding and sharing it on the internet."
            </div>
            <div className="socialMedia mt-4">
                <div className="github flex items-center">
                    <svg className="icon mr-2 text-yellow-500" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                    <h1 className="text-yellow-500">Github: &nbsp;</h1>
                    <a className="link text-blue-400" href="https://github.com/Thepratik333">@Thepratik333</a>
                </div>
                <div className="linkedin flex items-center mt-2">
                <i className="fab fa-linkedin mr-[7px]  text-yellow-500"></i>
                    <h1 className="text-yellow-500">LinkedIn: &nbsp;</h1>
                    <a className="link text-blue-400" href="https://www.linkedin.com/in/pratik-panchal59604a217">@pratik-panchal</a>
                </div>
                <div className="instagram flex items-center mt-2">
                <i className="fab fa-instagram-square mr-[7px]  text-yellow-500"></i>
                    <h1 className="text-yellow-500">Instagram: &nbsp;</h1>
                    <a className="link text-blue-400" href="https://www.instagram.com/thepratik333/">@thepratik333</a>
                </div>
            </div>
        </div>
    );
}

export default Bio;

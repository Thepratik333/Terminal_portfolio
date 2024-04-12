import React from 'react'
import { useState } from 'react';
import './Terminal.css'
import Experience from './Experience';
import Education from './Educations';
import Help from './Help';
import Bio from "./Bio"
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function Terminal() {

    const [input, setInput] = useState("")
    const [command, setCommand] = useState("ls")


    const handleCommand = (e) => {
        e.preventDefault()
        setCommand(input)
        setInput('')
    }


    const boxs = ["bg-red-500", "bg-yellow-500", "bg-green-500"];
    return (
        <div>
            <div className="text-gray-300 max-w-4xl mx-auto border-x-2 border-t-2 border-slate-800 rounded-t-md bg-slate-800 p-2 flex items-center">
                <div className="flex gap-2">
                    {boxs.map((color, index) => {
                        return (
                            <div
                                key={index}
                                className={`w-3 h-3 ${color} rounded-full`}
                            ></div>
                        );
                    })}
                </div>

                <div className="flex-1 mr-16 flex justify-center items-center">
                    <div className="flex items-center gap-1">
                        <h1 className="text-center text-white flex"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.655 3.56L8.918.75a1.785 1.785 0 0 0-1.82 0L2.363 3.56a1.889 1.889 0 0 0-.921 1.628v5.624a1.889 1.889 0 0 0 .913 1.627l4.736 2.812a1.785 1.785 0 0 0 1.82 0l4.736-2.812a1.888 1.888 0 0 0 .913-1.627V5.188a1.889 1.889 0 0 0-.904-1.627zm-3.669 8.781v.404a.149.149 0 0 1-.07.124l-.239.137c-.038.02-.07 0-.07-.053v-.396a.78.78 0 0 1-.545.053.073.073 0 0 1-.027-.09l.086-.365a.153.153 0 0 1 .071-.096.048.048 0 0 1 .038 0 .662.662 0 0 0 .497-.063.662.662 0 0 0 .37-.567c0-.206-.112-.292-.384-.293-.344 0-.661-.066-.67-.574A1.47 1.47 0 0 1 9.6 9.437V9.03a.147.147 0 0 1 .07-.126l.231-.147c.038-.02.07 0 .07.054v.409a.754.754 0 0 1 .453-.055.073.073 0 0 1 .03.095l-.081.362a.156.156 0 0 1-.065.09.055.055 0 0 1-.035 0 .6.6 0 0 0-.436.072.549.549 0 0 0-.331.486c0 .185.098.242.425.248.438 0 .627.199.632.639a1.568 1.568 0 0 1-.576 1.185zm2.481-.68a.094.094 0 0 1-.036.092l-1.198.727a.034.034 0 0 1-.04.003.035.035 0 0 1-.016-.037v-.31a.086.086 0 0 1 .055-.076l1.179-.706a.035.035 0 0 1 .056.035v.273zm.827-6.914L8.812 7.515c-.559.331-.97.693-.97 1.367v5.52c0 .404.165.662.413.741a1.465 1.465 0 0 1-.248.025c-.264 0-.522-.072-.748-.207L2.522 12.15a1.558 1.558 0 0 1-.75-1.338V5.188a1.558 1.558 0 0 1 .75-1.34l4.738-2.81a1.46 1.46 0 0 1 1.489 0l4.736 2.812a1.548 1.548 0 0 1 .728 1.083c-.154-.334-.508-.427-.92-.185h.002z"></path></svg>Pratik Panchal/terminal_portfolio</h1>
                    </div>
                </div>
            </div>
            <div className="terminalBox overflow-auto" style={{ scrollbarWidth: "none", padding: "0 15px" }}>
                <p className='pt-[10px]'>{`Today is, ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()]} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][new Date().getMonth()]} ${new Date().getDate()} ${new Date().getFullYear()}`}</p><br />
                   {command === "ls"? <h1  className=' text-center text-[30px]'>█▓▒▒░░░WELCOME░░░▒▒▓█</h1>: ""}
                <form className='comandForm  flex items-center' onSubmit={handleCommand}>
                    <p>C:\Pratik&gt;{command} $~</p>
                    <input onChange={e => setInput(e.target.value)} value={input} type="text" name='command' placeholder='try ls ...' className='comandInput' />
                </form>
                {command === "ls"?<Help/>:""}
                {command === "bio"?<Bio/>:""}
                {command === "skill"?<Skills/>:""}
                {command === "project"?<Projects/>:""}
                {command === "experience"?<Experience/>:""}
                {command === "education"?<Education/>:""}
                {command === "contact"?<Contact/>:""}
                {["ls", "bio", "skill", "project", "experience", "education", "contact"].indexOf(command) === -1 && (
                    <div className="terminal bg-black text-white font-mono p-4 rounded-lg">
                        <p className="text-red-500">Command not found</p>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Terminal
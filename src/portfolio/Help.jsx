import React from 'react';

function Help() {
  let help = [
    {
      ls: "Lists Categories",
      bio: "Show my bio information.",
      project: "Shows a list of projects I have.",
      skill: "List all of my skills.",
      contact: "List all of the contacts.",
      experience: "List all of experience",
      certification: "All My Certificate",
      education: "My Education",
      "ctrl + l": "To clear the history.",
    },
  ];

  return (
    <div className="bg-black w-full text-[18px] text-white font-mono py-[2px] px-[1rem] rounded-lg w-96 max-w-full overflow-x-auto">
      {help.map((command, i) => (
        Object.entries(command).map(([key, value], ind) => (
          <div className='flex' key={ind}>
            <span className="text-green-400">$ {key}</span>
            <p className="text-white"> - {value}</p>
          </div>
        ))
      ))}
    </div>
  );
}

export default Help;

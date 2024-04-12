import React from 'react';

function Skills() {
  return (
    <div className="terminal">
      <p className="text-white text-lg font-bold mx-2 mt-4 mb-6">MY SKILLS :</p>
      <p className="text-white mx-2 border-b border-white mb-6"></p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[10px]">
        <SkillBar name="html" percentage={95} className="htmlBar"/>
        <SkillBar name="Css" percentage={85} className="cssBar"/>
        <SkillBar name="JavaScript" percentage={90} className="jsBar"/>
        <SkillBar name="React" percentage={95} className="reactBar"/>
        <SkillBar name="Php" percentage={85} className="phpBar"/>
        <SkillBar name="MongoDb" percentage={70} className="mongoDbBar"/>
        <SkillBar name="Node.js" percentage={55} className="nodeBar"/>
        <SkillBar name="Express Js" percentage={65} className="expressBar"/>
        <SkillBar name="Sql" percentage={85} className="sqlBar"/>
        <SkillBar name="C/C++/Unix/ABDMS/git-github" percentage={85} className="allBar"/>
      </div>
    </div>
  );
}

function SkillBar({ name, percentage, className }) {
  return (
    <div className="bg-gray-800 p-[10px] rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">{name}</p>
        <p>{percentage}%</p>
      </div>
      <div className="w-full bg-gray-600 h-4 mt-2 rounded-lg overflow-hidden">
        <div
          className={`${className} h-full bg-green-500`}
        ></div>
      </div>
    </div>
  );
}

export default Skills;
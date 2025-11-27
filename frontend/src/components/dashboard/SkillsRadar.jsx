import React from 'react';

const SkillsRadar = ({ skills }) => {
  // This is a simplified skills radar component
  // In a real app, you'd use a proper chart library for a radar chart
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">Skill Progress</h3>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{skill.name}</span>
              <span className="text-gray-500">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ease-out ${
                  skill.level < 30 ? 'bg-red-500' : 
                  skill.level < 70 ? 'bg-yellow-500' : 
                  'bg-green-500'
                }`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsRadar;
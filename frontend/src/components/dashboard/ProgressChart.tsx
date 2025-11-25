import React from 'react';

interface ProgressChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  // This is a simplified chart component
  // In a real app, you'd use a charting library like Chart.js or recharts
  const maxValue = Math.max(...data.values);
  
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4">Weekly Learning Activity</h3>
      
      <div className="flex items-end space-x-2 h-40">
        {data.labels.map((label, index) => (
          <div key={label} className="flex flex-col items-center flex-1">
            <div 
              className="w-full bg-blue-500 rounded-t transition-all duration-500 hover:bg-blue-600"
              style={{ 
                height: `${(data.values[index] / maxValue) * 100}%`,
                minHeight: '4px'
              }}
            ></div>
            <p className="text-xs text-gray-600 mt-2">{label}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-right">
        <span className="text-xs text-gray-500">Total this week: {data.values.reduce((a, b) => a + b, 0)} minutes</span>
      </div>
    </div>
  );
};

export default ProgressChart;
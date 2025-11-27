const _jsxFileName = "src\\components\\dashboard\\ProgressChart.tsx";import React from 'react';








const ProgressChart = ({ data }) => {
  // This is a simplified chart component
  // In a real app, you'd use a charting library like Chart.js or recharts
  const maxValue = Math.max(...data.values);
  
  return (
    React.createElement('div', { className: "card p-6" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 16}}
      , React.createElement('h3', { className: "text-lg font-semibold mb-4"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 17}}, "Weekly Learning Activity"  )

      , React.createElement('div', { className: "flex items-end space-x-2 h-40"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 19}}
        , data.labels.map((label, index) => (
          React.createElement('div', { key: label, className: "flex flex-col items-center flex-1"   , __self: this, __source: {fileName: _jsxFileName, lineNumber: 21}}
            , React.createElement('div', { 
              className: "w-full bg-blue-500 rounded-t transition-all duration-500 hover:bg-blue-600"     ,
              style: { 
                height: `${(data.values[index] / maxValue) * 100}%`,
                minHeight: '4px'
              }, __self: this, __source: {fileName: _jsxFileName, lineNumber: 22}}
)
            , React.createElement('p', { className: "text-xs text-gray-600 mt-2"  , __self: this, __source: {fileName: _jsxFileName, lineNumber: 29}}, label)
          )
        ))
      )

      , React.createElement('div', { className: "mt-4 text-right" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 34}}
        , React.createElement('span', { className: "text-xs text-gray-500" , __self: this, __source: {fileName: _jsxFileName, lineNumber: 35}}, "Total this week: "   , data.values.reduce((a, b) => a + b, 0), " minutes" )
      )
    )
  );
};

export default ProgressChart;
import React from 'react'

const StatCard = ({ 
  label, 
  value, 
  color, 
  bgColor, 
  textColor, 
  icon, 
  progressPercentage,
  onClick 
}) => {
  return (
    <div 
      className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden"
      onClick={onClick}
    >
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${color} opacity-5 rounded-full -translate-y-6 translate-x-6`}></div>
      
      <div className={`${bgColor} ${textColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-600 leading-tight">
          {label}
        </h3>
        <div className="flex items-end justify-between">
          <span className="text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
            {value}
          </span>
          
          <div className="flex flex-col items-end">
            <div className="w-2 h-8 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`w-full bg-gradient-to-t ${color} rounded-full transition-all duration-1000 ease-out`}
                style={{ height: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
    </div>
  )
}

export default StatCard
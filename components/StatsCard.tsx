import { calculateTrendPercentage } from "~/lib/utils"

const StatsCard = ({id,headerTitle,total,lastMonthCount,currentMonthCount} : StatsCard) => {
  const {trend,percentage} = calculateTrendPercentage(currentMonthCount,lastMonthCount)
  return (
    <>
      <div className="stats-card flex flex-row justify-between items-center">
      
          <div className="dashoard-stats" key={id} >
              <h3 className="text-base text-bold-100 font-semibold">{headerTitle}</h3>
              <p className="text-3xl text-bold-100 font-bold py-3">{total}</p>
              <div className="flex" >              
                <img 
                  src={`/assets/icons/arrow${trend === "increment" ?'-up-green.svg': '-down-red.svg'}`}
                  alt="trend"/>
                <p className={`text-sm text-bold-100 font-semibold ${trend === "increment" ? 'text-green-500' : 'text-red-500'}`}>{Math.round(percentage)}%</p>
                <p className="text-gray-100 truncate text-sm pl-1"> vs last month</p>
              </div>         
          </div>
          <div className="dashboard-chart  ">
            <img 
              src={`/assets/icons/${trend === "increment" ? 'increment.svg' : 'decrement.svg'}`}
              alt="trend chart"
            />
          </div>
      </div>
    </>
  )
}

export default StatsCard
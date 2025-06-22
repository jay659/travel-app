import { Header,StatsCard } from "../../../components";
function Dashboard() {
  const user ={
    name: "jay"
  }
  const dashboardStats ={
    totalUsers: 12450,
    userJoined:{currentmonth: 4000 , lastmonth : 3500},
    totalTrips: 3000,
    tripsCreated: {currentmonth: 500, lastmonth: 600},
    totalActiveUsers: 460,
    activeUsers: {currentmonth: 200, lastmonth: 180},
  }

  const { totalUsers, userJoined, totalTrips, tripsCreated, totalActiveUsers, activeUsers } = dashboardStats;

  return (
    <main className="dashboard wrapper">
      <Header 
        title={`Welcome ${user.name ? user.name : "Guest"}`}
        description = "Track your trips, manage your bookings, and explore new destinations with ease."
      />
      
        <div className="grid lg:grid-flow-col grid-row-3 gap-2 ">

        <StatsCard 
          headerTitle = "Total Users"
          total = {totalUsers}
          lastMonthCount = {userJoined.lastmonth}
          currentMonthCount = {userJoined.currentmonth}
        />
        <StatsCard 
          headerTitle = "Total Trips"
          total = {totalTrips}
          lastMonthCount = {tripsCreated.lastmonth}
          currentMonthCount = {tripsCreated.currentmonth}
        />
        <StatsCard 
          headerTitle = "Active Users Today"
          total = {totalActiveUsers}
          lastMonthCount = {activeUsers.lastmonth}
          currentMonthCount = {activeUsers.currentmonth}
        />
        </div>
    </main>
 
  )

}

export default Dashboard
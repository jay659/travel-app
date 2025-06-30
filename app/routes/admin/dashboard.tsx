import TripsCard from "components/TripsCard";
import { Header,StatsCard,HeadingText, } from "../../../components";
import {user, dashboardStats, allTrips} from "~/constants";

function Dashboard() { 

  return (
    <main className="dashboard wrapper">
      <Header 
        title={`Welcome ${user.name ? user.name : "Guest"}`}
        description = "Track your trips, manage your bookings, and explore new destinations with ease."
      />
      
    <section className="grid lg:grid-flow-col grid-row-3 gap-2 ">
      {dashboardStats.map(({id,title,total,diffrence}) => (
        <StatsCard id={id} headerTitle={title} total={total} lastMonthCount={diffrence.lastmonth} currentMonthCount={diffrence.currentmonth} />
      ))}
    </section>

    <section className="container">
      <HeadingText title="Recent Trips" size={2}/>
      <div className="grid lg:grid-flow-col  gap-3">
        {allTrips.slice(0,4).map(({id,name,imageUrls,estimatedPrice,itinerary,tags}) =>(
          <TripsCard 
           
            id={id} 
            name={name} 
            imageUrls={imageUrls} 
            estimatedPrice={estimatedPrice} 
            itinerary={itinerary} 
            tags={tags}
            />
        ))}
      </div>
    </section>


    </main>
  )
}

export default Dashboard
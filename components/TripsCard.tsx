import { Link } from 'react-router';
import { getFirstWord,cn } from '../assets/lib/utils';
import * as  ChipListComponents from '@syncfusion/ej2-react-buttons';
import '@syncfusion/ej2-react-buttons/styles/material.css';

const { ChipsDirective, ChipDirective , ChipListComponent } = ChipListComponents;
const TripsCard = ({id,name,imageUrls,estimatedPrice,itinerary,tags}:any) => {
  return (
    <Link to={`/trips/${id}`} >
      <div className="trip-card " key={id}>
        <img src={imageUrls[0]} alt={name} /> {/* Placeholder for trip image */}
          <article>
            <h2>{name}</h2>
            <figure>
              <figcaption>{itinerary[0].location}</figcaption>
            </figure>
          </article>
          <div className='tripCard-pill'>{estimatedPrice}</div>
          <ChipListComponent id="TripsCard" >
            <ChipsDirective>
              {tags.map((tag:string,index:number) => (
                   <ChipDirective 
                      key={index}
                      text={getFirstWord(tag)}
                      cssClass={cn(index===0 ? '!bg-pink-50 !text-pink-500' : '!bg-success-50 !text-success-500')}
                      ></ChipDirective>
              ))}
             
        
             
            </ChipsDirective>
          </ChipListComponent>
      </div>
    </Link>
  )
}

export default TripsCard
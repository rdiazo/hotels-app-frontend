// ListHotels.jsx

import HotelCard from "./HotelCard";
import '../HomePage/styles/HomePage.css';

const ListHotels = ({ hotels }) => {
  return (
    <div className="Hotel__card__container">
      {
        !hotels || hotels?.length === 0
          ? (<h2>No there hotels with this name</h2>)
          : (
            hotels?.map(hotel => (
              <div className="hotel-container" key={hotel.id}>
                <div className="hotel-card-wrapper">
                  <HotelCard
                    
                    hotel={hotel} />
                </div>
              </div>
            ))
          )

      }
    </div>
  );
}

export default ListHotels;

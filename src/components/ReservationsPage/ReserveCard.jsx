import React from 'react';
import getDaysFromDates from "../../services/getDaysFromDates";
import './styles/ReserveCard.css';

const ReserveCard = ({ reserve, deleteReservation, setReserveSelected, onReviewClick }) => {
  const reservationsDays = getDaysFromDates(reserve.checkIn, reserve.checkOut);

  const handleDelete = () => {
    deleteReservation('/bookings', reserve.id);
  }

  return (
    <article className="reserve__container">
      <header className="reserve__header">
        <img className="reserve__image" src={reserve.hotel.images[0].url} alt="" />
        <div className="reserve__content__name__city">
          <h3 className="reserve__hotel__name">{reserve.hotel.name}</h3>
          <div className="reserve__hotel__city">{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
          <div className='reserve__reviews__click' onClick={onReviewClick}>Rate and comment this visit...</div>
        </div>
      </header>

      <section className="reserve__section">
        <div className="reserve__reservationDays"><span>Reservations's days:</span> <span className="reserve__days">{reservationsDays}</span></div>
        <div><span>Subtotal Price:</span><span className="reserve__dollar"> USD$</span><span> {Number(reserve.hotel.price) * reservationsDays}</span></div>
      </section>
      <button className="reserve__button__delete" onClick={handleDelete}><i className="bx bx-trash"></i></button>
    </article>
  );
}

export default ReserveCard;

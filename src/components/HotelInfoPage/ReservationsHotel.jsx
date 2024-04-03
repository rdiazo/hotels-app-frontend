import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"

const ReservationsHotel = ({ hotelId }) => {

  const {handleSubmit, register, reset} = useForm()

  const [ ,,createReservation ] = useCrud()

  const submit = data => {
    const obj = {
      ...data,
      hotelId
    }
    createReservation('/bookings', obj)
  }

  return (
    <div>
      <h2 className="reservation__title">Reservations</h2>
      <form className="form__reservation" onSubmit={handleSubmit(submit)}>
        <label className="content__info">
          <span className="span__chekInOut">Check-in</span>
          <input className="input__checkInOut" {...register('checkIn')} type="date" />
        </label>
        <label className="content__info">
          <span className="span__chekInOut">Check-out</span>
          <input className="input__checkInOut" {...register('checkOut')} type="date" />
        </label>
        <button className="button__booking">Booking</button>
      </form>
    </div>
  )
}

export default ReservationsHotel
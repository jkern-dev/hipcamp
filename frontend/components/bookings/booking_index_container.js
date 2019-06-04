import {connect} from 'react-redux';
import { requestAllBookings } from '../../actions/bookings_actions';
import BookingIndex from './booking_index';

const mapStateToProps = (state) => {
  return {
    bookings: Object.values(state.entities.bookings),
    sites: state.entities.sites
    // currentUser: state.users[state.session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestAllBookings: () => dispatch(requestAllBookings())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex);


import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p>{message}</p>;
}

export { Notification };

Notification.protoType = {
  message: PropTypes.string.isRequired,
};

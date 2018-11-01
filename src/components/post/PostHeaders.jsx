import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Quote from './Quote';

export const OPHeader = ({
  subject, name, date, id,
}) => (
  <div className="d-flex flex-wrap justify-content-between">
    <span>
      <span className="subject">
        {subject}
        {' '}
      </span>
      <span className="name">
        {name}
        {' '}
      </span>
      <span>
        {moment(date).fromNow()}
        {' '}
      </span>
    </span>
    <span>
      ID:
      {' '}
      <Quote id={id} />
    </span>
  </div>
);

OPHeader.defaultProps = {
  subject: null,
  name: null,
  date: null,
  id: null,
};

OPHeader.propTypes = {
  subject: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string,
};

export const ReplyHeader = ({ name, date, id }) => (
  <div className="d-flex flex-wrap justify-content-between">
    <span>
      <span className="name">{name}</span>
      {' '}
      <span>{moment(date).fromNow()}</span>
    </span>
    <span>
      ID:
      {' '}
      <Quote id={id} />
    </span>
  </div>
);

ReplyHeader.defaultProps = {
  name: null,
  date: null,
  id: null,
};

ReplyHeader.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string,
};

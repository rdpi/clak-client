import React from 'react';
import PropTypes from 'prop-types';

const MessageBody = ({ body }) => (
  <span>
    {body.split('\n').map((line) => {
      if (line.charAt(0) === '>' && line.charAt(1) !== '>' && line.charAt(2) !== '>') {
        return (
          <span className="quote">
            {line.split(' ').map((word) => {
              if (word.charAt(0) === '>' && word.charAt(1) === '>') { return <a href={`#${word.substring(2)}`}>{`${word} `}</a>; }
              return `${word} `;
            })}
            <br />
          </span>
        );
      }
      return (
        <span>
          {line.split(' ').map((word) => {
            if (word.charAt(0) === '>' && word.charAt(1) === '>') {
              return <a href={`#${word.substring(2)}`}>{word}</a>;
            }
            return `${word} `;
          })}
          <br />

        </span>
      );
    })
  }
  </span>
);

MessageBody.defaultProps = {
  body: '',
};

MessageBody.propTypes = {
  body: PropTypes.string,
};

export default MessageBody;

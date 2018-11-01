import React from 'react';
import PropTypes from 'prop-types';

const MessageBody = ({ body }) => (
  <span>
    {body.split('\n').map((line, index1) => {
      if (line.charAt(0) === '>' && line.charAt(1) !== '>' && line.charAt(2) !== '>') {
        return (
          <span key={index1} className="quote">
            {line.split(' ').map((word, index2) => {
              if (word.charAt(0) === '>' && word.charAt(1) === '>') { return <a key={index2} href={`#${word.substring(2)}`}>{`${word} `}</a>; }
              return `${word} `;
            })}
            <br />
          </span>
        );
      }
      return (
        <span key={index1}>
          {line.split(' ').map((word, index2) => {
            if (word.charAt(0) === '>' && word.charAt(1) === '>') {
              return <a key={index2} href={`#${word.substring(2)}`}>{word}</a>;
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

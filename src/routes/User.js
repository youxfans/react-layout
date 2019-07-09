import React from 'react';

export default function Users(props) {
  return (
    <h1>{props.match.params.id || 'Not ID'}</h1>
  )
}
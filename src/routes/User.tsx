import React from 'react';
export default function Users(props: { match: { params: { id: string | undefined } } }) {
  return (
    <h1>{props.match.params.id || 'Not ID'}</h1>
  )
}
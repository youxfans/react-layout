import React from 'react';
import { RouteComponentProps } from 'react-router';

type Params =  { id: string };

export default function Users(props: RouteComponentProps<Params>) {
  return (
    <h1>{props.match.params.id || 'Not ID'}</h1>
  )
}
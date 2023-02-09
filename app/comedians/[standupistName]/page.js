import { NotFound } from 'next/navigation';
import React from 'react';
import { comedians } from '../../../database/comedians';
import Comedian from './Comedian';

export default function ComedianIntroPage({ params }) {
  const singleComedian = comedians.find((comedian) => {
    return comedian.lastName.toLocaleLowerCase() === params.standupistName;
  });
  console.log(singleComedian);
  if (!singleComedian) {
    NotFound();
  }

  return <Comedian comedian={singleComedian} />;
}

import { NotFound } from 'next/navigation';
import React from 'react';
import { comedians, getComedian } from '../../../database/comedians';
import Comedian from './Comedian';

export default async function ComedianIntroPage({ params }) {
  // const singleComedian = comedians.find((comedian) => {
  //   return comedian.lastName.toLocaleLowerCase() === params.standupistName;
  // });
  const singleComedian = await getComedian(params.standupistId);
  console.log(singleComedian);
  if (!singleComedian) {
    NotFound();
  }

  return <Comedian comedian={singleComedian} />;
}

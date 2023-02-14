import { NotFound } from 'next/navigation';
import React from 'react';
import { getComedian } from '../../../database/comedians';
import Comedian from './Comedian';

export async function generateMetadata(props) {
  const singleComedian = await getComedian(props.params.standupistId);
  return {
    title: `Page for ${singleComedian.firstName}`,
    description: '',
    icons: {
      shortcut: '/favicon.ico',
    },
  };
}

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

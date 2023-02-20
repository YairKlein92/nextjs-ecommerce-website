import { notFound } from 'next/navigation';
import React from 'react';
import { getComedian } from '../../../database/comedians';
import { comedianNotFoundMetadata } from '../not-found';
import Comedian from './Comedian';

type Props = {
  params: {
    standupistId: string;
  };
};
// type Standupist = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   age: string;
//   nationality: string;
//   podcast?: string;
//   lastSpecial: string;
//   eventNumber: string;
//   ticketPriceMin: string;
//   link: string;
//   description?: string;
//   genres: string;
// };
export async function generateMetadata(props: Props) {
  const singleComedian = await getComedian(parseInt(props.params.standupistId));
  if (typeof singleComedian === 'undefined') {
    return comedianNotFoundMetadata;
  }
  return {
    title: `Page for ${singleComedian.firstName}`,
    description: `This page contains information about ${singleComedian.firstName} ${singleComedian.lastName}`,
    icons: {
      shortcut: '/favicon.ico',
    },
  };
}

export default async function ComedianIntroPage(props: Props) {
  // const singleComedian = comedians.find((comedian) => {
  //   return comedian.lastName.toLocaleLowerCase() === params.standupistName;
  // });

  const singleComedian = await getComedian(parseInt(props.params.standupistId));
  if (!singleComedian) {
    notFound();
  }
  return <Comedian comedian={singleComedian} />;
}

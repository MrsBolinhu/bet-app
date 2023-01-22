import React from 'react'
import { IMatch } from '../../types/match'
import { CardImage } from './CardImage'

export const Card = ({ match }: PropTypes) => (
    <div className="grid grid-cols-4 content-center py-5 px-auto rounded-xl bg-secondaryDark shadow-[0_0_30px_rgba(0,0,0,0.25)] text-primaryLight">
      <CardImage Image={match.home}/>
      <div className='col-span-2'>
        <div className='text-center font-black'>{ match.teams }</div>
        <p className='text-center'>{ match.weekDay }, { match.date } </p>
      </div>
      <CardImage Image={match.visitor}/>
    </div>
)


interface PropTypes{
  match: IMatch
}
import React from 'react'
import './CSS/Franchise.css'
import { FranchiseContent } from '../Components/FranchiseContent/FranchiseContent'
import { Banner } from '../Components/Banner/Banner'

export const Franchise = () => {
  return (
    <div className='franchise'>
      <Banner />
      <FranchiseContent />
    </div>
  )
}

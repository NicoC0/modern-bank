import React from 'react'
import styles from '../style'
import { features } from '../constants'

const FeatureCard = ({ index, icon, title, content}) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.lenght - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt='icons' className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='text-white text-[18px] leading-[23px] font-poppins font-semibold mb-1'>{title}</h4>
        <p className='text-dimWhite text-[16px] leading-[23px] font-normal mb-1'>{content}</p>
      </div>
    </div>
  )
}

export default FeatureCard
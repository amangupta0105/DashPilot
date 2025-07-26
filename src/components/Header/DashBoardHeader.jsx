import React from 'react'
import UserInfo from '../Users/UserInfo'
import Insights from '../Insights/Insights'
import AddProject from '../Project/Add/AddProject'

const DashBoardHeader = () => {
  return (
    <div className='flex justify-between p-4'>
        <div className='text-xl font-bold'>Board</div>
        <div className='flex gap-4 '>
            <div><UserInfo/></div>
            <div><Insights/></div>
            <div><AddProject/></div>
        </div>
    </div>
  )
}

export default DashBoardHeader
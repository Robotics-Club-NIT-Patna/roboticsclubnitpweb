import React from 'react'
import Reward from './Reward'

function RewardList({rewards}) {
    const rewardList = rewards.map((reward,id)=>{
        return <Reward key={id} reward={reward} />
    })
    return (
        <>
            {rewardList}
        </>
    )
}

export default RewardList

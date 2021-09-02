import React from 'react'
import Reward from './Reward'

function RewardList({rewards}) {
    const rewardList = rewards.map(reward=>{
        return <Reward reward={reward} />
    })
    return (
        <>
            {rewardList}
        </>
    )
}

export default RewardList

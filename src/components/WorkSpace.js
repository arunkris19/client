import React from 'react'

function WorkSpace({Component}) {
    return (
        <div className='workspace container'>
            <div className='spacer-l'>
                {Component}
            </div>
        </div>
    )
}

export default WorkSpace

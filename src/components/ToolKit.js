import React from 'react'
import { ToolkitData } from '../data/Toolkit.data'

function ToolKit() {
    return (
        <div className='toolkit container spacer-l'>
            <header className='display middle text-l medium'>
                <img src="/logo-color.svg" alt="logo" width="48" /><span className='spacer-m'>IntelliD tools</span>
            </header>
            <main className='container'>
                {ToolkitData.map((tool) => (
                    <div className='spacer-sy'>
                        <div className='tool-item spacer-l'>
                            <h3 className='medium'>{tool.title}</h3>
                            <p>{tool.description}</p>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    )
}

export default ToolKit

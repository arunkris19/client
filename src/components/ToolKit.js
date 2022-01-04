import React from 'react'
import { ToolkitData } from '../data/Toolkit.data'

function ToolKit({setCurrentTool}) {
    return (
        <div className='toolkit container spacer-l'>
            <header className='display middle text-l medium'>
                <img src="/logo-color.svg" alt="logo" width="36" /><span className='spacer-m'>IntelliD TOOLS</span>
            </header>
            <main className='container'>
                {ToolkitData.map((tool) => (
                    <div className='spacer-sy' key={tool.id} onClick={(e) => setCurrentTool(tool)}>
                        <div className='tool-item spacer-l'>
                            <h3 className='medium'>{tool.title}</h3>
                            <p>{tool.description}</p>
                            <div className='spacer-my'><button>Try this tool</button></div>
                        </div>
                    </div>
                ))}
            </main>
            <p className='text-m spacer-ly'>Copyright &copy; intellidtools.com {new Date().getFullYear()}</p>
        </div>
    )
}

export default ToolKit

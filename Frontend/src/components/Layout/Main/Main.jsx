import React from 'react'
import LeftSction from '../LeftSction'
import RightSection from '../RightSection'

function Main() {
    return (
        <>
            <div className="h-screen w-full flex items-center justify-center p-2 gap-4">
                <LeftSction />
                <RightSection />
            </div>

        </>
    )
}

export default Main
import React from 'react'
import Header from '../../components/Header'
import { RootLayoutProps } from '../../Common/interface'

const RootLayout = ({children}:RootLayoutProps) => {
    return (
        <div className="mx-auto p-4">
            {/* header */}
            <Header />
            {/* children */}
            <div>
                {children}
            </div>
        </div>
    )
}

export default RootLayout
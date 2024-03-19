import React from 'react'
import Navbar from './Navbar'

function Content() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/classification" element={<Classification />} />
                <Route path="/flowcharts" element={<Flowcharts />} />
                <Route path="/updates" element={<Updates />} />
                <Route path="/errors" element={<Errors />} />
                <Route path="/links" element={<Links />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    )
}

export default Content
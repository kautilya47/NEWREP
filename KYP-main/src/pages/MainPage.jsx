import React from 'react'
import Home from './Home'

function MainPage() {
    return (
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/classification" element={<Classification />} />
                    <Route path="/flowcharts" element={<Flowcharts />} />
                    <Route path="/updates" element={<Updates />} />
                    <Route path="/errors" element={<Errors />} />
                    <Route path="/links" element={<Links />} />
                    <Route path="/login" element={<LoginPage />} />
                    {/* <Route path="/links" element={<Links />} /> */}
                </Routes>
            </div>
        </>
    )
}

export default MainPage
import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { Layout, Typography, Space } from 'antd'
import { Navbar, Homepage, Cryptocurrencies, News, CryptoDetails } from './components'

import './App.css'
import 'antd/dist/antd.css'

const App = () => {
    return (
        <div className='app'>

            <div className='navbar'>
                <Navbar />
            </div>

            <div className='main'>
                <Layout className='routes'>
                    <Routes>
                        <Route exact path='/' element={<Homepage />} />
                        <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                        <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                        <Route exact path='/news' element={<News />} />
                    </Routes>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse <br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>

        </div>
    )
}

export default App
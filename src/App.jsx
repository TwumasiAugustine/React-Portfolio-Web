import React from 'react'
import './App.css'
import {Header} from './Header';
import {Contents} from './Content'
import {Footer} from './Footer'

export class App extends React.Component{
    render(){
        return (
        <div>
            <Header />
            <Contents />
            <Footer />
        </div>
        )
    }
}

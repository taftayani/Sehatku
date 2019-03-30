import React, { Component } from 'react';
import Head from '../Input/Header'
import Header from '../Component/Homepage/HeaderFirst'
import First from '../Component/Homepage/FirstSection'
class Beranda extends React.Component{
    render(){
        return(
            <div>
                <Head/>
                <div className="container-fluid navbar-bg">
                    <div className="container">
                        <Header/>
                    </div>
                </div>
                <First/>
                <style jsx>{
                   `
                    .navbar-bg{
                        position:fixed;
                        background: white;
                        box-shadow:0px 3px 6px 2px grey;
                    }
                    .first-bg{
                        background: #E8E8E8;
                        padding-top:90px;
                        padding-bottom:70px;
                    }
                    .heading-first{
                        font-family:Neo Sans W1G;
                        color:#535D65;
                    }
                    .img-heading-first{
                        background:#A0A4A8;
                        height:90px;
                        border-radius:8px;
                        width:70%;
                        margin-top:30px;
                    }
                    .img-heading-second{
                        background:#A0A4A8;
                        height:100%;
                        border-radius:8px;
                        width:80%;
                    }
                   `
                }
            </style>
            </div>
           
        )
    }
}
export default Beranda;
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'
import Gallery from '../../components/gallery/gallery'
import bannerImage from '../../assets/banner.png'
import './home.scss'

export default function Home() {
    return (
        <div>
            <Header />
            <main className="main">
            <Banner imageUrl={bannerImage} showText={true} />
            <Gallery />
            </main>
            <Footer/>
        </div>
    );
}

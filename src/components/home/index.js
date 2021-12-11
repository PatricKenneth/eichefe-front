import React from 'react';
import Header from '../header';
import FirstSection from '../first-section';
import SecondSection from '../second-section';
import ThirdSection from '../third-section';
import FormSection from '../form-section';
import Footer from '../footer';

function Home() {
    return (
        <div style={{ background: '#030A13' }}>
            <div style={{ paddingTop: '40px' }} >
                <Header />
            </div>
            <div style={{ background: '#0C121A' }} >
                <FirstSection />
            </div>
            <div>
                <SecondSection />
            </div>
            <div style={{ background: "#0C121A" }}>
                <ThirdSection />
            </div>
            <div>
                <FormSection />
            </div>
            <div style={{ background: "#0C121A" }}>
                <Footer />
            </div>
        </div>
    )
};

export default Home;
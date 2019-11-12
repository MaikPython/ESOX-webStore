import React from 'react'

export default function LandingPageLures() {
    const lure1 = <img src="/assets/lant_1.jpg" alt="" width="100" height="300"/>
    const lure2 = <img src="/assets/lant_2.jpg" alt="" width="100" height="300"/>
    const lure3 = <img src="/assets/lant_3.jpg" alt="" width="100" height="300"/>

    return (
        <div className="landing-page-lures">
            <div className="landing-page-lure">
                {lure1}
                <div style={{flex:"1", marginLeft:"5%"}}>
                    <h4>Lebaleht</h4>
                    <p>Hea ahveni püügiks</p>
                </div>

            </div>
            <div className="landing-page-lure">
                {lure2}
                <div style={{flex:"1", marginLeft:"5%"}}>
                    <h4>Pöörlevlant KULDNE</h4>
                    <p>Hea haugi püügiks</p>
                </div>
            </div>    
            <div className="landing-page-lure">
                {lure3}
                <div style={{flex:"1", marginLeft:"5%"}}>
                    <h4>Pöörlevlant HÕBE</h4>
                    <p>Hea haugi püügiks</p>
                </div>
            </div>
        </div>
    )
}

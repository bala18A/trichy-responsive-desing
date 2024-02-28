import React from 'react'
import "./Main1.css"
import img1 from "./Screenshot 2024-02-24 204813.png"
import img2 from "./Screenshot 2024-02-24 204850.png"
import img3 from "./Screenshot 2024-02-24 204908.png"
import img4 from "./Screenshot 2024-02-24 204922.png"
import img5 from "./Screenshot 2024-02-24 204935.png"
const Main1 = () => {
    return (
        <div>
            <div className='main1' >
                <h1>Learn with focus <br></br> despite  <span className='ADHD'>ADHD</span> </h1>
            </div>
            <div className='para'>
                <section>The feasibility of thean ct and some cos  cost hean ct and some cos  cost estimates. estimates. Duringt estimates. During system analysis the feasibility study of the proposed system is to be carried out. This is to ensure that the proposed system is not a burden to the company.  </section>
            </div>
            <div className='input'>
                <input type='text' placeholder='Email address...' />
                <button>GetEarlyAccess</button>
            </div>
            <div className='discount'>
                <section className='dis'>🌹27% OFF to early adopters</section>
            </div>
            <div className='con'>
                <div className='paragraph'>
                    <section className='last-para'>The feasibility of thean ct and some  feasibility of thean </section>
                </div>
            </div>
            <div className='logos'>
                <img src={img1} height={50} width={100} />
                <img src={img2} height={50} width={100} />
                <img src={img3} height={50} width={100} />
                <img src={img4} height={50} width={100} />
                <img src={img5} height={50} width={100} />

            </div>




        </div>
    )
}

export default Main1
import React, { useState } from 'react'
import './style/profileBody.css'

function BodyAboutUs() {

    const [isShow, setIsShow] = useState(false)
    const showTheText = !isShow ? "Show More..." : "Show less..."
    const loremLong = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa illo voluptatibus repellat aliquid vel dicta debitis suscipit minus ipsa, hic, voluptates ratione eum fugit maxime porro repudiandae quidem nulla, dolorem molestiae iure. Incidunt ipsam ipsum illo omnis accusantium repellat cum aliquam. Deserunt accusantium tenetur placeat vero ab cumque itaque dolore porro ducimus alias facilis beatae eveniet quod vitae hic at, nostrum quos delectus iste rem a. Natus sapiente expedita aperiam alias, eius repellendus aliquid totam hic eligendi consectetur praesentium corrupti repudiandae enim sed nulla dolorum, quas earum. Aut reiciendis itaque ut quia ipsam, ex quis ratione id praesentium magni eligendi repellendus consequuntur illo nulla voluptatibus non quae dicta quam minima reprehenderit temporibus exercitationem sint suscipit aperiam! Quidem est in mollitia veritatis. Fugiat sed, hic itaque est impedit quae eos quos officiis maxime asperiores. Ratione, incidunt nobis necessitatibus rem consectetur perspiciatis impedit id vitae corporis veritatis aliquid ex eligendi eum odit, excepturi dolores! Minus nesciunt alias laboriosam temporibus ducimus, nam, libero autem consequuntur eum suscipit obcaecati porro quasi perspiciatis, facere magni quae aliquam nihil! Minus sint illum deserunt ullam provident voluptatibus nostrum recusandae officiis fugit saepe sunt repudiandae delectus debitis voluptas quis, nulla eligendi vel reiciendis minima. Earum est nesciunt harum.'
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.In, impedit!'



    return (
        <div className='profile-container'>
            <div className='profile-container-title'>
                <span>About us</span>
            </div>
            <div className={`${isShow ? 'show-more' : 'show-less'}`}>{loremLong}</div>
            <div
                className={`${loremLong.length < 50 ? 'd-none' : 'd-block'}`}
                onClick={() => setIsShow(!isShow)}
            >
                {showTheText}
            </div>
        </div >
    )
}

export default BodyAboutUs

import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Countdown = ({ data }) =>  {
    let date = new Date(data.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    date = date.toLocaleDateString("id-ID", options)

    return (
      <div className="countdown-section">
        <Img sizes={data.featureImage.fluid} />
        <div className="container">
          <div className="countdown-inner">
            <h2 className="with-underline">{data.title}</h2>
            <span className="date">

            </span>
            <Link to="/produk">Beli sekarang!</Link>
          </div>
        </div>
      </div>
    )  
}

export default Countdown;

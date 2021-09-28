import React from 'react'
import ServicesRow from './ServicesRow'
import marketing from '../../assets/services-marketing.png'
import webdesigner from '../../assets/services-webdesigner.png'
function ServicesRows() {

    return (
        <div>
            <ServicesRow
                src={marketing}
                mainheading='"I can finally focus on my Online course and delegate the rest" '
                maintext='What if you could get all your website tasks off your plate and focus only on creating the best course content? Working with EZ Colab allows you to scale your marketing and grow faster with beautiful, responsive and converting websites all without becoming a designer or developer yourself.'
            />
            <ServicesRow
                src={webdesigner}
                mainheading='Never Feel Embarrassed About Your Web Design Again!'
                maintext='Not happy with the way your website looks? Our designers can help make it look like the latest trend while also boosting conversions.'
            />
        </div>
    )
}

export default ServicesRows

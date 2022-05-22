import React from 'react'
import {ImTwitter,ImInstagram} from 'react-icons/im'
import {FaFacebook} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <ImTwitter/>
        </div>
        <div>
            <ImInstagram/>
        </div>
        <div>
            <FaFacebook/>
        </div>

    </div>
  )
}

export default SocialMedia
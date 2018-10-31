import React from 'react'
// Image
import github from '../../images/github.svg'
import mail from '../../images/mail.svg'
import tel from '../../images/tel.svg'

export default function ContactIcon (props) {
  return (
    <div>
      {
        props.img === 'github' ?
          <div className='mx-3'>
            <img src="../images/github.svg" width="25px" />
          </div>
          : props.img === 'mail' ?
            <div className='mx-3'>
              <img src="../images/mail.svg" width="25px" />
            </div>
          : props.img === 'tel' ?
            <div className='mx-3'>
              <img src="../images/tel.svg" width="25px" />
            </div>
          :
            <div></div>
      }
    </div>
  )
}
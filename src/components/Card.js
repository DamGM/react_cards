import React from 'react'
import PropTypes from "prop-types"
import "./cards.css"


export default function Card({title, imageSource,text,url}) {

  return (
    <div className='card text-center bg-dark animate__animated animate__bounce'>
      <div className='overflow'>
         <img src={imageSource} alt='' className='card-img-top'/>
      </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          { 
          text ? text:' Lorem ipsum dolor sit amet consectetur adipiscing elit himenaeos netus.'

          }
        </p>
        <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank" rel="noreferrer">
          Go to this site
        </a>
      </div>
    </div>
  )
} 

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource:PropTypes.string,
  text: PropTypes.string
}

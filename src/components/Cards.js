import React from 'react'
import Card from './Card'
import Image1 from "../assets/image1.jpg"
import Image2 from "../assets/image2.jpg"
import Image3 from "../assets/image3.jpg"

const cards = [
    {
        id:1,
        title:"Web",
        image: Image1,
        url:'https://github.com/DamGM',
        
    },
    {
        id:2,
        title:"LinkedIn",
        image: Image2,
        url:'https://www.linkedin.com/in/dámaris-guzmán-martín'
    },
    {
        id:3,
        title:"Instagram",
        image: Image3,
        url:'https://www.instagram.com'
    }
]

export default function Cards() {
  return (
    <div className='container d-flex justufy-content-center align-items-center h-100'>
        <div className='row' key={cards.id}>
           {
            cards.map(cards => (
               <div className='col-md-4'>
                <Card title={cards.title} imageSource={cards.image} url={cards.url}/>
               </div>
            ))
            }
         
        </div>
        
    </div>
  )
}

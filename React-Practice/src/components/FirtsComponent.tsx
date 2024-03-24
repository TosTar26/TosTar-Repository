import React, { useState } from 'react'

const FirtsComponent = ({
    name = 'Oscar',
    description = ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus nulla ipsam cumque id natus voluptatum tenetur magni, iure aliquam magnam qui, aperiam fuga laborum quidem, vitae itaque error aspernatur?',   
    imagen = 'https://i.imgur.com/Mx7dA2Y.jpg'
}) => {
const [show, setshow] = useState(false);

const handleshowclick = () =>{
    setshow(!show);
}
  return (
   <div className='Card'>
    <div>
<h2>{name}</h2>
<img src={imagen} alt="" />
    </div>

<button type='button' className='button' onClick={handleshowclick}>
    {show ? 'Ocultar' : 'Mostrar'} Detalles
    </button>
    {show && <p>{description}</p>}

   </div>
  )
}

export default FirtsComponent
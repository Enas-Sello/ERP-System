import React from 'react'

const TotalChosen = ({title,num}) => {
  return (
    <>
          <span className="textDarkyellow fs-4 fw-bold">{ num}</span>
          <h4>{ title}</h4>
    </>
  );
}

export default TotalChosen
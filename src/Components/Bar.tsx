import React from 'react'

const Bar: React.FC = ({percentage}) => {
  return (
    <div
    style ={{
        height: `100px`,
        width: '10px',
        color: 'black',
        backgroundColor: 'black',
        margin: '0 2px',

    }}>
        <div style={{
            height: `${percentage * 100}%`,
            width: '100%',
            color: 'white',
            backgroundColor: 'red',
            borderRadius: '5px',
            margin: '0 2px',
        }}>

        </div>
    </div>
  )
}

export default Bar
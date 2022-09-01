import React from 'react'
import Card from './Card'

const Container = ({data}) => {
  return (
    <div className='w-full mx-auto flex flex-row flex-wrap justify-center items-center'>
        {
            data.map((item, key)=>{
                return <>
                    <Card item = {item} key={key}/>
                </>
            })
        }
    </div>
  )
}

export default Container

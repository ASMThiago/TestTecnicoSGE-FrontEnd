import React from 'react'
import LayoutDefault from '../layouts/LayoutDefault'
import catServices from '../services/cat'

export default function Home() {
  catServices.getIds("gif").then((res) => {
    console.log(res);
  });

  return (
    <div>
      <LayoutDefault tabActive={0}>
        HOME
      </LayoutDefault>      
    </div>
  )
}

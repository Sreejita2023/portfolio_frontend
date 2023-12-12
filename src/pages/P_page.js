import React from 'react'
import Header from '../components/Header'
function P_page() {
  const heading="Projects"
  const title="Agency provides a full service range including technical skills, design, business understanding."
  return (
    <div>
       <Header head={heading} title={title}/>
    </div>
  )
}

export default P_page
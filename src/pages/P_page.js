import React,{useEffect} from 'react'
import Header from '../components/Header'
import Dev from '../components/projects/Dev'
function P_page() {
  const heading="Projects"
  const title="Agency provides a full service range including technical skills, design, business understanding."
   useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({top: 0, left: 0, behavior:'smooth'});
    }, []);

  return (
    <div>
       <Header head={heading} title={title}/>
       <Dev/>
    </div>
  )
}

export default P_page
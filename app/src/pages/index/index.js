import React from 'react'
// import './index.less'
import News from '../../components/news'
import Intr from '../../components/body/intr'
const Index = (props) => {
  // const title = config
  return (
    <div className="index-route">
      <News />
      <div>
        <div style={{clean: 'all'}}>
          <Intr />
        </div>
      </div>
    </div>
  )
}
export default Index
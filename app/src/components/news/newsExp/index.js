import React, { Component } from 'react'
// import {config} from './index.json'
import { Card } from 'antd'
import { Link } from 'react-router'
import pic1 from './pic1.gif'
import pic2 from './pic2.jpg'
import './index.less'
import NewsCardRender from './newsCardRender'
import API from '../../../../api'


const ERR_OK = 0;
const NewsTitle = (props) => {
  // const title = config
  return (
    <div className="news-title">
      <div className="news-title-lside">本站动态</div>
      <div className="news-title-rside">更多>></div>
    </div>
  )
}

class NewsExpCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fetchData : false,
      links : []
    }
    this.fetchSiteMov = this.fetchSiteMov.bind(this)
  }

  fetchSiteMov () {
    fetch(API()+'/newsexp',{
      method : 'GET',
      headers : {

      }
    }).then((res) => res.json()).then(json => {
      if(json.code === ERR_OK) {
        this.setState({
          first : json.data.first_content,
          links : json.data.data,
          fetchData : true
        })
      }
    })
  }

  componentDidMount() {
    this.fetchSiteMov()
  }

  render () {

    return (
      <Card className="news-card" title='新闻速递' style={{width: '48%'}}>
          <NewsCardRender links={this.state.links} first={this.state.first}/>
      </Card>

    )
  }
}

export default NewsExpCard
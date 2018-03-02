import React, { Component } from 'react'
import styles from './HomePage.scss'

class HomePage extends Component {
  static fetchData () {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(resolve)
        .catch(reject)
    })
  }

  render () {
    const { userId, id, title, body } = this.props // from the json above

    return (
      <div key={id}>
        <p>User ID: {userId}</p>
        <p>Title: {title}</p>
        <p>Body: {body}</p>
      </div>
    )
  }
}

export default HomePage

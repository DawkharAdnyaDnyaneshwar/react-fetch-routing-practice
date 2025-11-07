import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogItem: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetail()
  }

  getBlogDetail = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }

    this.setState({blogItem: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, blogItem} = this.state
    const {id, title, imageUrl, avatarUrl, author, content, topic} = blogItem
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-item-detail-container">
        <h2 className="blog-title">{title}</h2>
        <div className="blog-author-container">
          <img
            src={avatarUrl}
            alt={`blog-author${id}`}
            className="blog-avatar"
          />
          <p className="blog-author">{author}</p>
        </div>
        <img src={imageUrl} alt={`blog-image${id}`} className="blog-image" />
        <p className="blog-content">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails

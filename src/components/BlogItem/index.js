import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {detail} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = detail

  return (
    <Link to={`/blogs/${id}`} className="blog-item-container">
      <img src={imageUrl} alt={`item${id}`} className="item" />
      <div className="item-detail">
        <p className="item-topic">{topic}</p>
        <h2 className="item-title">{title}</h2>
        <div className="item-author-container">
          <img
            src={avatarUrl}
            alt={`item-avatar${id}`}
            className="item-avatar"
          />
          <p className="item-author">{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem

import React from 'react'
import './comments.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Commentslist from '../../components/CommentsList/Commentslist'

const Comments = () => {
  return (
    <div className="comments">
        <Sidebar />
        <Commentslist />
    </div>
  )
}

export default Comments
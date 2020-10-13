import React from 'react'
import PropTypes from 'prop-types'
import GalleryItem from './GalleryItem'

const Gallery = (props) => {
  return (
    <div>
      {props.nodes && (
        <div className="row">
          {props.nodes.map((node) => {
            return (
              <article id={node.id} className="6u 12u$(xsmall) work-item">
                <GalleryItem {...node} />
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}
Gallery.defaultProps = {
  nodes: [],
}
Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery

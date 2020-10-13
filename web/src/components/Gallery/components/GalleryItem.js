import React from 'react'
import PropTypes from 'prop-types'
//import Image from '../../Image'

const GalleryItem = (props) => {
  return (
    <>
      <a className="image fit thumb" href="#">
        {/* <Image alt={props.mainImage.alt} /> */}
      </a>
      <h3>{props.title}</h3>
      <p>{}</p>
    </>
  )
}

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default GalleryItem

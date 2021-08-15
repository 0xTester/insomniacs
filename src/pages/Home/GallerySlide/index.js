import React from "react";

import './index.scss'

import galleryImg from 'assets/gallery.jpg'

var slideStyle = {
  width: "100%",
  background: "white url(" + galleryImg + ") repeat",
  backgroundSize: "cover",
  position: 'absolute', top: '0px', left: '0px',
  height: '800px',
};

class GallerySlide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      galleryX: 0,
    }
  }

  componentDidMount() {
    this._clearInterval = setInterval(this._updateGalleryPosition, 20)
  }

  componentWillUnmount() {
    this._clearInterval()
  }

  _updateGalleryPosition = () => {
    this.setState({
      galleryX: this.state.galleryX - 1
    })
  }

  render() {
    return <>
      <div className="GallerySlide flex" style={{ position: 'relative' }}>
        <div style={{ ...slideStyle, backgroundPosition: `${this.state.galleryX}px 0px` }}>
        </div>
      </div>
    </>
  }
}

export default GallerySlide;

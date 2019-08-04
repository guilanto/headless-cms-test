import React from 'react';
import {Link, RichText} from 'prismic-reactjs';

export default class ImageGallery extends React.Component {
  galleryItems() {
    return this.props.slice.items.map((item, index) => {
      return (
        <div className="gallery-item" key={index}>
          <img src={item.image.url} alt={item.image.alt} />
          {RichText.render(item.image_description, this.props.prismicCtx.linkResolver)}
          {RichText.asText(item.link_label) !== "" ? (
            <p className="gallery-link">
              <a href={Link.url(item.link, this.props.prismicCtx.linkResolver)}>
                {RichText.asText(item.link_label)}
              </a>
            </p>
          ) : '' }
        </div>
      );
    });
  }

  render() {
    return (
      <section className="image-gallery content-section">
        {RichText.render(this.props.slice.primary.gallery_title, this.props.prismicCtx.linkResolver)}
        <div className="gallery">
          {this.galleryItems()}
        </div>
      </section>
    );
  }
}
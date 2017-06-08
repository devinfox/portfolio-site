import React, { Component } from 'react';
import Contact from './Contact';
import "./About.css";

class About extends Component{
  render() {
    return (
      <div className="about-root">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 about-content">
              <h2>About Section</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu orci vel ante vulputate viverra. Donec ac purus eu lectus euismod scelerisque. In imperdiet tincidunt arcu. Etiam et auctor purus, in mollis nisi. Vivamus volutpat risus sed ornare tempus. Sed cursus augue a lacus interdum iaculis. Quisque ut ante pellentesque, tincidunt nisi vitae, iaculis lorem.
              </p>
              <p>
                Aenean ante ante, placerat sit amet egestas vel, placerat nec odio. Nam suscipit elementum vulputate. Praesent in nisl nisl. Sed vel molestie orci. Morbi posuere diam eget purus tristique tristique. 
              </p>
              <p>
                Sed viverra magna tellus, quis faucibus ligula suscipit eget. Sed vel accumsan ante. Donec eu nibh lorem. Vestibulum efficitur gravida dolor vitae commodo. Sed metus velit, vestibulum vitae lorem eget, eleifend vulputate risus. 
              </p>
              <p>
                Mauris imperdiet libero a erat mollis sagittis. Fusce vel libero luctus, viverra magna eu, cursus elit. Pellentesque porttitor lectus risus.
              </p>
            </div>
            <div className="col-xl-4 offset-xl-1 col-lg-5 offset-lg-1 col-md-12 col-sm-12 col-12">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
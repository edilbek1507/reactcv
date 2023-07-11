import React from "react";

function Section2() {
  return (
    <div className="footer">
      <div className="footer_item" id="footer_item1">
        <div>
          <h4>USEFUL LINKS</h4>
          <h5>About</h5>
          <h5>Services</h5>
          <h5>Contact</h5>
          <h5>Shop</h5>
          <h5>Blog</h5>
        </div>
      </div>
      <div className="footer_item" id="footer_item2">
        <h4>NEWSETTLER</h4>
        <input
          className="footer_inp"
          type="text"
          id=""
          placeholder="Your Email Address"
        />
        <button className="footer_btn">SUBSCRIBE NOW</button>
      </div>
      <div className="footer_item" id="footer_item3">
        <h4>CONTACT</h4>
        <h4>720001, Chuy 123, Bishkek, Chuy, Kyrgyzstan</h4>
      </div>
    </div>
  );
}

export default Section2;

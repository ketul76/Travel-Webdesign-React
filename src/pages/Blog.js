import React from 'react';

function Blog() {
  return (
    <>
      <div className='container-fluid blog'>
        <div className='container p-5'>
          <div className='blog-title text-white'>
            <h3>Read Our Articals on Travel</h3>
            <p>
              "We travel some of us forever ,to seek " <br />
              other places ,other lives, other Souls.
            </p>
          </div>
          <div className='blog-img-part row text-white py-3'>
            <div className='col-lg-3 col-12'>
              <img src='blog1.jpg ' className="img-fluid"/>
              <h4>How far will you go to reach your destination</h4>
              <p>One morning, when Gregor Samsa woke from troubled dreams,in his bed into a horrible vermin. armour-like back, and if he lifted his head a little.</p>
              <button type="button" class="btn btn-light px-3">Read More</button>
            </div>
            <div className='col-lg-3 col-12'>
              <img src='blog2.jpg' className="img-fluid"/>
              <h4>How far will you go to reach your destination</h4>
              <p>One morning he found himself transformed in his bed into a horrible vermin. He lay on his, and if he lifted his head a little he could see</p>
              <button type="button" class="btn btn-light px-3">Read More</button>
            </div>
            <div className='col-lg-3 col-12'>
              <img src='blog3.jpeg' className="img-fluid"/>
              <h4>How far will you go to reach your destination</h4>
              <p>One morning, when Gregor Samsa woke from troubled dreams,ble vermin. He lay on his armour-like back, and if he lifted his head a little he could.</p>
              <button type="button" class="btn btn-light px-3">Read More</button>
            </div>
            <div className='col-lg-3 col-12'>
              <img src='blog4.jpg' className="img-fluid"/>
              <h4>How far will you go to reach your destination</h4>
              <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. he lifted his head.</p>
              <button type="button" class="btn btn-light px-3">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Blog;
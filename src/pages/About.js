import React from 'react';

function About() {
  return (
    <>
      <div className='container-fluid'>
        <div className='container'>
          <div className='about-title text-center py-4'>
            <h3 className='fw-bold'>See What We Have to Offer</h3>
            <h4>"We Travel ,Some Of us Forever <br/>
            to seek Other Places ,Other Lives ,other Souls"</h4>
          </div>
          <div className='icons d-flex justify-content-center flex-wrap fs-6 text-center py-4'>
            <div className='px-3'>
              <img src='airport.png'  />
              <p>Airport</p>
            </div>
            <div className='px-3'>
              <img src='bars.png'  />
              <p>Bars</p>
            </div>
            <div className='px-3 '>
              <img src='basin.png'  />
              <p>Basin</p>
            </div>
            <div className='px-3'>
              <img src='cruise.png'  />
              <p>Cruise</p>
            </div>
            <div className='px-3'>
              <img src='photos.png'  />
              <p>Photo</p>
            </div>
            <div className='px-3 '>
              <img src='search.png'  />
              <p>Search</p>
            </div>
            <div className='px-3 '>
              <img src='transportation.png'  />
              <p>Transportation</p>
            </div>
          </div>
          <div className='d-flex flex-column flex-lg-row about-part-2 py-3'>
              <div className='image1 mx-3'>
                <h1 className='text-center'>Enjoy <br/>It To Fully</h1>
                <img src='image1.png' className='img-fluid' />
                <p  className='p-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
              </div>
              <div className='image2 mx-3'>
              <h1 className='text-center'>Do It <br/>Differently</h1>
                <img src='image2.jpg' className='img-fluid' />
                <p className='p-3'> totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
              </div>
              <div className='image3 mx-3'>
              <h1 className='text-center'>Escape <br/>Completely</h1>
                <img src='image3.jpg' className='img-fluid' />
                <p  className='p-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
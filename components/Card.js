import React from 'react';

const Card = () => {
  return (
    <section className='our-blog'>
      <div className='container'>
        <div className='text-center'>
          <h2>
            Our <span>Blog</span>
          </h2>
          <p>
            It is a long established fact that a reader will be of a page when
            established fact looking at its layout.
          </p>
        </div>
        <div className='row mt-5'>
          <div className='col'>
            <div className='card'>
              <img
                src='https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                alt
              />
              <div className='card-body'>
                <h5 className='card-title'>
                  <a href='#'>Card Title</a>
                </h5>
                <p className='date-author'>
                  11 March 2020 <span className='author'>By Abbos</span>
                </p>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam vero eaque animi pariatur fugit excepturi, fuga
                  delectus facere provident beatae.
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img
                src='https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                alt
              />
              <div className='card-body'>
                <h5 className='card-title'>
                  <a href='#'>Card Title</a>
                </h5>
                <p className='date-author'>
                  11 March 2020 <span className='author'>By Abbos</span>
                </p>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam vero eaque animi pariatur fugit excepturi, fuga
                  delectus facere provident beatae.
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img
                src='https://images.unsplash.com/photo-1601971935068-fb9281b6deec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                alt
              />
              <div className='card-body'>
                <h5 className='card-title'>
                  <a href='#'>Card Title</a>
                </h5>
                <p className='date-author'>
                  11 March 2020 <span className='author'>By Abbos</span>
                </p>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam vero eaque animi pariatur fugit excepturi, fuga
                  delectus facere provident beatae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;

import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className='about'>
      <div className="site-container">
        <div className="about-us page-content" data-page="AboutUs" role="region" aria-label="About Us">
          <div className="about-us__content">
            <div className="about-us__header">
              <h1 className="about-us__header-title">
                <span>About</span> Maybelline
              </h1>
              <div className="about-us__header-body">
                <p>Maybelline New York is the number one global cosmetics brand and is available in over 129 countries worldwide.
                  Offering more than 200 products, Maybelline New York combines technologically advanced formulas with on-trend expertise
                  to create accessible cosmetics with a cool, urban edge and a spirited style. Maybelline New York is the official
                  sponsor of New York Mercedes-Benz Fashion Week. Want to know more
                  <span><a href='https://www.maybelline-me.com/en-gcc/about-maybelline'> More</a></span></p>
                  <div>
                    <p className='mt-2'>Our Website<span className='fa fa-globe'><a href='https://www.maybelline.com/'>  www.maybelline.com</a></span></p>
                  
                  </div>

                {/* <p>In 1913, young Chicago chemist Thomas Williams had a dilemma.
                  His older sister, Maybel, was in love with a man who was in love with someone else.
                  Maybel Williams did her best with what was available—she used petroleum jelly on her lashes
                  and brows to enhance them. Her brother decided to help her increase her allure by adding
                  carbon dust to the petroleum jelly, which darkened her lashes and brows more dramatically. The product worked.
                  In 1915, Maybel got her man and Thomas founded what would become the global industry giant, Maybelline,
                  named after the bride and her favourite beauty aid. </p>

                <p>Two years later, Williams introduced Maybelline Cake Mascara,
                  the first modern eye cosmetic made for everyday use.
                  Initially available only through mail order, it was so popular that women began to ask for it in drugstores.
                  The signature red Eyebrow Pencil followed, along with coloured eyeshadows and complementary eyeliners, leading
                  the youthful, flapper fashion trend of dramatic makeup. Maybelline became the first cosmetic company to
                  advertise on radio and sales boomed. In 1932, responding to incessant demand, Maybelline introduced a
                  special 10-cent package of Cake Mascara for retail sale. And the rest, as they say, is history!</p> */}
              </div>
            </div>
            <div className="about-us__subheader">
              <h2 className="about-us__subheader-title">
                <span>Make It</span> Happen
              </h2>
              <div className="about-us__subheader-body">

              </div>
            </div>
          </div>
          <div className="about-us__footer">
            <img className='about_image' alt="footer" class="lazy" src="https://www.maybelline-me.com/~/media/mny/mena%20hub/hygiene-pages/about-us/footer.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

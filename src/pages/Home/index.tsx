import React from 'react';

import { Form } from '@unform/web';

import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

import {
  Container,
  HeaderFylo,
  NavList,
  NavMenu,
  Intro,
  SectionFyloFeatures,
  FeaturesContainer,
  Features,
  SectionFyloProductive,
  ProductText,
  SectionFyloTestimonials,
  Testimonals,
  Testimonal,
  User,
  FooterContainer,
  FooterFlex,
  FooterFylo,
  FooterSection,
  FormSection,
  SocialIcons,
} from './styles';

import logoSvg from '../../assets/logo.svg';

import stayProductive from '../../assets/illustration-stay-productive.png';
import bgQuotes from '../../assets/bg-quotes.png';

import IllustrationIntro from '../../assets/illustration-intro.png';
import iconAccess from '../../assets/icon-access-anywhere.svg';
import iconCollaboration from '../../assets/icon-collaboration.svg';
import iconSecurity from '../../assets/icon-security.svg';
import iconAnyFile from '../../assets/icon-any-file.svg';

import iconMail from '../../assets/icon-email.svg';
import iconLocation from '../../assets/icon-location.svg';
import iconPhone from '../../assets/icon-phone.svg';

import Profile1 from '../../assets/profile-1.jpg';
import Profile2 from '../../assets/profile-2.jpg';
import Profile3 from '../../assets/profile-3.jpg';

const Home: React.FC = () => {
  return (
    <>
      <HeaderFylo>
        <Container>
          <nav>
            <NavList>
              <img src={logoSvg} alt="logo" />
              <NavMenu>
                <li>
                  <a href="/">Features</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">SignIn</a>
                </li>
              </NavMenu>
            </NavList>
          </nav>

          <Intro>
            <img src={IllustrationIntro} alt="illustration-intro" />
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <button type="button">Get Started</button>
          </Intro>
        </Container>
      </HeaderFylo>

      <SectionFyloFeatures>
        <FeaturesContainer>
          <Features>
            <img src={iconAccess} alt="icon-access" />
            <h3>Access your files, anywhere</h3>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </Features>
          <Features>
            <img src={iconSecurity} alt="icon-security" />
            <h3>Access your files, anywhere</h3>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </Features>
          <Features>
            <img src={iconCollaboration} alt="icon-collaboration" />
            <h3>Access your files, anywhere</h3>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </Features>
          <Features>
            <img src={iconAnyFile} alt="icon-any-files" />
            <h3>Access your files, anywhere</h3>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </p>
          </Features>
        </FeaturesContainer>
      </SectionFyloFeatures>

      <SectionFyloProductive>
        <img src={stayProductive} alt="stay-productive" />
        <ProductText>
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href="/">See how Fylo works</a>
        </ProductText>
      </SectionFyloProductive>

      <SectionFyloTestimonials>
        <div>
          <img src={bgQuotes} alt="bg-quotes" />
        </div>
        <Testimonals>
          <Testimonal>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <User>
              <img src={Profile1} alt="profile-1" />
              <div>
                <h5>Satish Patel</h5>
                <h6>Founder | CEO, Huddle</h6>
              </div>
            </User>
          </Testimonal>
          <Testimonal>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <User>
              <img src={Profile2} alt="profile-2" />
              <div>
                <h5>Bruce McKenzie</h5>
                <h6>Founder | CEO, Huddle</h6>
              </div>
            </User>
          </Testimonal>
          <Testimonal>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <User>
              <img src={Profile3} alt="profile-3" />
              <div>
                <h5>Iva Boyd</h5>
                <h6>Founder | CEO, Huddle</h6>
              </div>
            </User>
          </Testimonal>
        </Testimonals>
      </SectionFyloTestimonials>
      <FormSection>
        <Form
          className="form-rocket"
          onSubmit={() => {
            console.log('oi');
          }}
        >
          <h2>Get early access today</h2>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div>
            <input type="text" name="" id="" placeholder="email@email.com.br" />
            <button type="button">Get Started For Free</button>
          </div>
        </Form>
      </FormSection>
      <FooterFylo>
        <FooterContainer>
          <img src={logoSvg} alt="logo" />
          <FooterFlex>
            <FooterSection>
              <FooterFlex>
                <img src={iconLocation} alt="location" />
                <div className="location">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore etdolore magna aliqua
                  </p>
                </div>
              </FooterFlex>
            </FooterSection>

            <FooterSection>
              <FooterFlex>
                <img src={iconPhone} alt="phone" />
                <p>+1-543-123-4567</p>
              </FooterFlex>

              <FooterFlex>
                <img src={iconMail} alt="mail" />
                <p>example@fylo.com</p>
              </FooterFlex>
            </FooterSection>
            <FooterSection>
              <ul>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Job</a>
                </li>
                <li>
                  <a href="/">Press</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </FooterSection>

            <FooterSection>
              <ul>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li>
                  <a href="/">Terms</a>
                </li>
                <li>
                  <a href="/">Privacy</a>
                </li>
              </ul>
            </FooterSection>
            <FooterSection>
              <SocialIcons>
                <a href="/">
                  <FaLinkedin />
                </a>
                <a href="/">
                  <FaTwitter />
                </a>
                <a href="/">
                  <FaFacebook />
                </a>
              </SocialIcons>
            </FooterSection>
          </FooterFlex>
        </FooterContainer>
      </FooterFylo>
    </>
  );
};

export default Home;

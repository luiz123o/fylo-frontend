import styled from 'styled-components';
import bgCurvy from '../../assets/bg-curvy-desktop.svg';
import bgCurvyMobile from '../../assets/bg-curvy-mobile.svg';

export const HeaderFylo = styled.header`
  flex: 1;
  background-color: hsl(217, 28%, 15%);
  background-image: url(${bgCurvy});
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 80px;
  @media (max-width: 767px) {
    padding-bottom: 0;
    background-image: url(${bgCurvyMobile});
  }
  img {
    max-width: 100%;
  }
  @media (max-width: 767px) {
    img {
      width: 100px;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 1280px;
  max-width: 100%;
`;
export const NavList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  li {
    padding: 10px 20px;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
    }
    @media (max-width: 767px) {
      a {
        padding: 10px;
        font-size: 14px;
      }
    }
  }
`;
export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  margin: 20px auto;
  width: 600px;
  max-width: 100%;
  text-align: center;

  h1 {
    margin-bottom: 10px;
    line-height: 1.5;
  }
  p {
    line-height: 1.5;
    margin-bottom: 10px;
  }
  button {
    padding: 20px 80px;
    background-image: linear-gradient(
      to right,
      hsl(176, 68%, 64%),
      hsl(198, 60%, 50%)
    );
    border-radius: 50px;
    border: none;
    color: #fff;
  }
  @media (max-width: 767px) {
    button {
      width: 100%;
    }
  }
`;

export const SectionFyloFeatures = styled.section`
  margin: 0 auto;
  width: 1280px;
  max-width: 100%;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #fff;
`;

export const Features = styled.div`
  margin: 40px;
  width: 400px;
  text-align: center;
  img {
    margin-bottom: 20px;
  }
`;

export const SectionFyloProductive = styled.section`
  margin: 60px auto;
  width: 1280px;
  max-width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 450px;
    margin-right: 50px;
  }
  @media (max-width: 767px) {
    img {
      margin: 0 auto;
    }
  }
`;

export const ProductText = styled.div`
  color: #fff;
  width: 450px;
  h2 {
    margin-bottom: 5px;
  }
  p {
    margin-bottom: 5px;
  }

  p + p {
    margin-bottom: 15px;
  }

  a {
    border-bottom: 1px solid hsl(176, 68%, 64%);
    color: hsl(176, 68%, 64%);
    text-decoration: none;
    padding-bottom: 5px;
  }
`;

export const SectionFyloTestimonials = styled.section`
  margin: 60px auto;
  width: 1280px;
  max-width: 100%;

  img {
    height: 20px;
    width: 20px;
    margin-bottom: -50px;
  }
`;

export const Testimonals = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto;
  color: #fff;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const Testimonal = styled.div`
  background-color: hsl(219, 30%, 18%);
  border-radius: 5px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 10px;
  width: 400px;
  max-width: 100%;
  p {
    font-style: italic;
    font-weight: 500;
    opacity: 0.8;
  }
`;

export const User = styled.div`
  display: flex;

  img {
    width: 50px;
    height: 50px;
    margin-top: 8px;
    margin-right: 10px;
    border-radius: 50%;
  }
  h5 {
    margin-top: 14px;
  }

  h6 {
    margin: 0;
    opacity: 0.7;
    margin: 5px 0;
  }
`;

export const FormSection = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0 auto -100px;
  position: relative;
  color: #fff;
  z-index: 1;
  h2 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 16px;
  }
  form {
    background-color: hsl(217, 28%, 15%);
    width: 800px;
    max-width: 100%;
    padding: 50px;
    text-align: center;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    input {
      flex: 1;
      border-radius: 50px;
      padding: 16px 60px;
      border: 0;
      margin: 20px 20px 20px 0;
    }
    @media (max-width: 767px) {
      input {
        margin: 20px 0;
      }
    }
    button {
      padding: 20px 80px;
      background-image: linear-gradient(
        to right,
        hsl(176, 68%, 64%),
        hsl(198, 60%, 50%)
      );
      border-radius: 50px;
      border: none;
      color: #fff;
    }
  }
`;

export const FooterFylo = styled.footer`
  background-color: hsl(216, 53%, 9%);
  padding: 150px 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  color: #fff;
`;

export const FooterFlex = styled.div`
  display: flex;

  margin-bottom: 15px;
  align-items: flex-start;
`;

export const FooterSection = styled.div`
  flex: 1;
  margin-top: 10px;
  padding: 10px;

  p {
    margin: 0 0 0 10px;
  }
  ul {
    padding: 0;
    padding-left: 10px;
    list-style-type: none;
    a {
      color: #fff;
      display: inline-block;
      margin-bottom: 15px;
      text-decoration: none;
    }
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }

  a {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    padding: 10px;
    text-decoration: none;
    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }
`;

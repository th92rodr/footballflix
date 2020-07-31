import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 10;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  margin-bottom: 50px;

  display: inline-block;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  line-height: 1;

  display: flex;
  align-items: center;
  text-align: center;

  display: inline-block;
  padding: 25px;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    padding: 10px;
    font-size: 18px;
  }
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;

  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const BannerMainContainer = styled.section`
  height: 80vh;
  position: relative;

  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;

  color: #fff;

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    position: absolute;
    right: 0;
    left: 0;
    content: '';

    display: block;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const WatchButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  color: var(--black);

  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;

  padding: 16px 24px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 5px;
  border-color: var(--black);

  background: var(--white);
  transition: opacity 0.3s;

  display: none;
  margin: 0 auto;

  @media (max-width: 800px) {
    display: block;
  }
`;

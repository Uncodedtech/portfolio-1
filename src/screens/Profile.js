import React from 'react';
import styled, { css, keyframes } from 'styled-components/macro';
import { Transition } from 'react-transition-group';
import Anchor from '../components/Anchor';
import { RouterButton } from '../components/Button';
import DecoderText from '../components/DecoderText';
import ProgressiveImage from '../components/ProgressiveImage';
import ProfileImg from '../assets/profile.jpg';
import ProfileImgLarge from '../assets/profile-large.jpg';
import ProfileImgPlaceholder from '../assets/profile-placeholder.jpg';
import { Media } from '../utils/StyleUtils';
const lab = '/lab';

const ProfileText = ({ status }) => (
  <React.Fragment>
    <ProfileTitle aria-label="Hi" status={status}>
      <DecoderText
        text="Hi"
        start={status !== 'exited'}
        offset={140}
      />
    </ProfileTitle>
    <ProfileDescription status={status}>
      I’m a student based in Austin, currently looking for an internship. I create compelling designs that I bring to life with the web's coolest technologies that look perfect on every screen.
    </ProfileDescription>
    <ProfileDescription status={status}>
      In my free time I like to create and play video games, play Magic: The Gathering, and <Anchor href={lab} target="_blank" rel="noopener noreferrer">experiment with new tech</Anchor>. I’m always interested in new projects, so feel free to drop me a line.
    </ProfileDescription>
  </React.Fragment>
);

function Profile(props) {
  const { id, tabIndex, visible, sectionRef } = props;

  return (
    <ProfileSection id={id} ref={sectionRef} tabIndex={tabIndex}>
      <Transition in={visible} timeout={0}>
        {status => (
          <ProfileContent>
            <ProfileColumn>
              <ProfileText status={status} />
              <ProfileButton
                secondary
                status={status}
                to="/contact"
                style={{ marginTop: 20 }}
                icon="send"
              >
                Send me a message
            </ProfileButton>
            </ProfileColumn>
            <ProfileColumn>
              <ProfileTag status={status}>
                <ProfileTagText status={status}>About Me</ProfileTagText>
              </ProfileTag>
              <ProfileImageContainer status={status}>
                <ProfileImage
                  status={status}
                  visible={visible}
                  placeholder={ProfileImgPlaceholder}
                  srcSet={`${ProfileImg} 480w, ${ProfileImgLarge} 960w`}
                  sizes={`(max-width: ${Media.mobile}) 100vw, 480px`}
                  alt=""
                />
              </ProfileImageContainer>
            </ProfileColumn>
          </ProfileContent>
        )}
      </Transition>
    </ProfileSection>
  );
};

const ProfileSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 40px;
  padding-top: 40px;
  padding-right: 80px;
  padding-bottom: 40px;
  padding-left: 220px;
  display: flex;
  justify-content: center;

  &:focus {
    outline: none;
  }

  @media (min-width: ${Media.desktop}) {
    padding-left: 120px;
  }

  @media (max-width: ${Media.tablet}) {
    padding-left: 160px;
    padding-right: 80px;
    height: auto;
    margin-top: 80px;
    margin-bottom: 20px;
  }

  @media (max-width: ${Media.mobile}) {
    padding-left: 25px;
    padding-right: 25px;
    overflow-x: hidden;
  }

  @media (max-width: ${Media.mobile}), (max-height: ${Media.mobile}) {
    padding: 0 ${props => props.theme.spacingOuter.mobile};
  }

  @media ${Media.mobileLS} {
    padding: 0 100px;
  }
`;

const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: 44% 48%;
  grid-column-gap: 8%;
  max-width: 1000px;
  width: 100%;

  @media (min-width: ${Media.desktop}) {
    max-width: 1100px;
  }

  @media (max-width: ${Media.tablet}) {
    max-width: 600px;
  }

  @media (max-width: ${Media.tablet}) {
    grid-template-columns: 100%;
  }
`;

const ProfileColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
  transform: translate3d(0, 0, 0);
`;

const ProfileTitle = styled.h2`
  font-size: 42px;
  margin: 0;
  font-weight: 500;
  margin-bottom: 40px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.8s ease 0.4s;

  ${props => props.status === 'entered' && css`
    opacity: 1;
  `}
`;

const ProfileDescription = styled.p`
  font-size: 22px;
  line-height: 1.4;
  margin: 0;
  margin-bottom: 30px;
  opacity: 0;
  transition: opacity 0.8s ease 0.6s;

  ${props => props.status === 'entered' && css`
    opacity: 1;
  `}

  @media (max-width: ${Media.mobile}) {
    font-size: 18px;
  }
`;

const ProfileTag = styled.div`
  margin-top: 220px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    position: relative;
    display: block;
    height: 2px;
    top: -1px;
    background: ${props => props.theme.colorPrimary(1)};
    width: 96px;
    margin-right: 15px;
    transition: all 0.4s ${props => props.theme.curveFastoutSlowin} 1s;
    transform: scale3d(0, 1, 1);
    transform-origin: left;
  }

  ${props => props.status === 'entered' && css`
    &:before {
      transform: scale3d(1, 1, 1);
    }
  `}

  @media (max-width: ${Media.tablet}) {
    margin-top: 30px;
  }
`;

const ProfileTagText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colorPrimary(1)};
  transform: translateX(-10px);
  opacity: 0;
  transition: all 0.4s ${props => props.theme.curveFastoutSlowin} 1.3s;

  ${props => props.status === 'entered' && css`
    transform: translateX(0);
    opacity: 1;
  `}
`;

const AnimProfileImage = keyframes`
  0% {
    transform: scale3d(0, 1, 1);
    transform-origin: left;
  }
  49% {
    transform: scale3d(1, 1, 1);
    transform-origin: left;
  }
  50% {
    transform: scale3d(1, 1, 1);
    transform-origin: right;
  }
  100% {
    transform: scale3d(0, 1, 1);
    transform-origin: right;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  &:before {
    content: '';
    background: ${props => props.theme.colorPrimary(1)};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale3d(0, 1, 1);
    transform-origin: left;
    z-index: 16;
  }

  ${props => props.status === 'entered' && css`
    &:before {
      animation: ${AnimProfileImage} 1.8s ${props.theme.curveFastoutSlowin} 0.6s;
    }
  `}
`;

const ProfileImage = styled(ProgressiveImage)`
  max-width: 100%;
  width: 960px;
  height: auto;
  opacity: 0;
  transition: opacity 0.4s ease 1.5s;

  ${props => props.status === 'entered' && css`
    opacity: 1;
  `}
`;

const ProfileButton = styled(RouterButton)`
  opacity: 0;
  transition: opacity 0.8s ease 0.6s;

  ${props => props.status === 'entered' && css`
    opacity: 1;
  `}
`;

export default React.memo(Profile);
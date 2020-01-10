import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import urls from '../../../utils/urls';
import { scrollToTopAnimation } from '../../../utils/animateScroll';
import _PlayCircle from '@material-ui/icons/PlayCircleFilled';
import Close from '@material-ui/icons/Close';
import SUSIVideo from '../../../images/susi.mp4';
import GIFDemo from '../../../images/gif.mp4';
import WebDemo from '../../../images/web.mp4';
import LocationDemo from '../../../images/location.mp4';
import JokesDemo from '../../../images/joke.mp4';
import FactsDemo from '../../../images/fact.mp4';
import MathDemo from '../../../images/math.mp4';
import susiSkill from '../../../images/susi_skill.png';
import susiTestVideo from '../../../images/susi-test.mp4';
import bots from '../../../images/bots.jpg';
import githubText from '../../../images/github-text-logo.png';
import manyLanguages from '../../../images/many_languages.png';
import allDevices from '../../../images/all_devices.png';
import androidMockup from '../../../images/android-mockup.jpg';
import mapAndroid from '../../../images/map-android.jpg';
import shield from '../../../images/shield.svg';
import openSource from '../../../images/open-source.png';
import Web from '@material-ui/icons/Web';
import GIF from '@material-ui/icons/Gif';
import LocationOn from '@material-ui/icons/LocationOn';
import Action from '@material-ui/icons/ChatBubble';
import Button from '@material-ui/core/Button';
import PlusOne from '@material-ui/icons/PlusOne';
import Search from '@material-ui/icons/Search';
import googlePlay from '../../../images/google-play.svg';
import appStore from '../../../images/app-store.svg';
import './Overview.css';
import styled, { css } from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

const commonDesc = css`
  text-align: left;
  color: #414141;
  font-family: sans-serif;
  margin-bottom: 0.625rem;
  font-size: 2.688rem;
  font-weight: 100;
  margin: 1.25rem 0;

  @media (max-width: 1139px) {
    font-size: 2.25rem;
  }

  @media (max-width: 1000px) {
    font-size: 2.25rem;
    margin-top: 0;
    text-align: center;
    line-height: 2.5rem;
  }
`;

const commonDeviceStore = css`
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  float: left;
  height: 2.813rem;
  width: 9.5rem;

  @media (max-width: 1000px) {
    display: block;
    float: none;
    margin: 0 auto 0.625rem auto;
    max-width: 100%;
    width: 50%;
    background-size: contain;
  }
`;

const commonImg = css`
  max-width: 100%;
  height: auto;
`;

const commonSection = css`
  margin: 0 auto;
  padding: 6.25rem 3.75rem;
  position: relative;
  max-width: 85%;
  align-items: center;
  box-shadow: inset 0 12.5rem 12.5rem -12.5rem #fff,
    inset 0 -12.5rem 12.5rem -12.5rem #fff;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-bottom: 0.063rem solid #dfdfdf;
  width: 65.625rem;

  @media (max-width: 1080px) {
    max-width: 58.75rem;
    padding-left: 1.25rem;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 0 0 0;
    width: 90%;
    margin: 0 auto;
  }
`;

const VideoModal = styled(Modal)`
  position: absolute;
  top: 2.875rem;
  left: 2.5rem;
  right: 2.5rem;
  background-color: #000;
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 0 3.75rem rgba(0, 0, 0, 0.07);

  @media (max-width: 1000px) {
    left: 1.25rem;
    right: 1.25rem;
    width: 90%;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 1.875rem;
  height: 0;
  overflow: hidden;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 5%;
  border: 0;
  width: 90%;
  height: 100%;
`;

const Container = styled.div`
  border-bottom: 0.063rem solid #dfdfdf;
  margin: 0 auto;
  padding: 0rem 1.25rem;
  position: relative;
  text-align: center;
  max-width: 85%;
  width: 65.625rem;

  @media (max-width: 1000px) {
    margin: 0 auto;
    padding: 1.25rem;
    width: 90%;
  }
`;

const SectionContainer = styled.div`
  margin: 0 auto;
  padding: 6.25rem 1.25rem 5rem 1.25rem;
  position: relative;
  text-align: center;
  max-width: 85%;
  width: 58.438rem;
  padding-top: 5rem;

  @media (max-width: 1000px) {
    padding: 3.75rem 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 2.188rem 0rem;
  }
`;

const PlayCircleLink = styled.a`
  color: #3367d6;
  cursor: pointer;
  position: relative;
  line-height: 1.5rem;
  display: block;
`;

const WatchSpan = styled.span`
  position: absolute;
  margin-top: 0.063rem;
  left: 1.938rem;
  right: 0rem;
  font-weight: 600;
`;

const PlayCircle = styled(_PlayCircle)`
  fill: #3367d6;
  margin-right: 3.125rem;
`;

const Section = styled.div`
  ${commonSection};
`;

const ConversationDescription = styled.div`
  ${commonDesc};
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const CustomDescription = styled.div`
  ${commonDesc};
  width: 100%;
`;

const DescriptionHeading = styled.div`
  ${commonDesc};

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

const CustomDescriptionHeading = styled.div`
  ${commonDesc};
  font: 300 1.5rem/2rem sans-serif;
`;

const DescriptionText = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 2.5rem;
  max-width: 27.5rem;
  color: #414141;
  font-family: sans-serif;
  margin-left: 1%;
  max-width: 100%;

  @media (max-width: 1000px) {
    font-size: 1rem;
    text-align: center;
    line-height: 1.5rem;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  text-align: center;

  @media (max-width: 1000px) {
    max-width: 100%;
    margin: 0 auto 1.25rem auto;
    padding: 0rem;
  }

  @media (max-width: 480px) {
    margin: 0 auto 3.125rem auto;
    width: 60%;
  }
`;

const CustomImgContainer = styled.div`
  width: 100%;
  text-align: center;

  @media (max-width: 1000px) {
    max-width: 100%;
    margin: 0 auto 1.25rem auto;
    padding: 0rem;
  }

  @media (max-width: 480px) {
    margin: 0 auto 1.875rem auto;
    width: 90%;
  }
`;

const RowDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
  height: 9rem;
  width: 27rem;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: auto;
  }
`;

const ColumnSection = styled.div`
  width: 30%;
  margin: 0 1% 0 0;
  min-height: 46.875rem;

  @media (max-width: 480px) {
    min-height: 31.25rem;
    width: 100%;
  }
`;

const SusiTestVideo = styled.video`
  text-align: left;
  width: 60%;
  margin-left: 30%;
  max-width: 19.563rem;

  @media (max-width: 1000px) {
    max-width: 100%;
    text-align: center;
    width: 25rem;
    margin: 0rem;
  }
`;

const AndroidMockupImg = styled.img`
  max-width: 60%;
  margin-left: 30%;

  @media (max-width: 1000px) {
    max-width: 25rem;
    margin-left: 0%;
    width: 100%;
  }
`;

const BotsMockupImg = styled.img`
  ${commonImg};
  padding: 0.625rem;
`;

const PlayStore = styled.a`
  ${commonDeviceStore};
  margin: 0 0.625rem 0.625rem 0;
  background: url(${googlePlay}) center center no-repeat;
  background-size: contain;
`;

const AppStore = styled.a`
  ${commonDeviceStore};
  background: url(${appStore}) center center no-repeat;
  background-size: cover;
  margin-bottom: 1.25rem;
`;

const ShieldImg = styled.img`
  width: 15.625rem;
  padding: 0.625rem;
  margin: 0 auto;
  display: block;

  @media (max-width: 1000px) {
    margin: 0 auto 3.75rem auto;
    padding: 1.875rem 0rem 0.625rem 0;
  }

  @media (max-width: 480px) {
    margin: 0 auto 3.125rem auto;
    width: 100%;
  }
`;

const OpenSourceLogos = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    width: 30rem;
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 10.625rem;
  }
`;

const OpenSource = styled.span`
  height: 5.313rem;
  display: inline-block;
  vertical-align: middle;

  @media (max-width: 480px) {
    height: 3.75rem;
  }
`;

const GithubLogo = styled.span`
  height: 3.75rem;
  vertical-align: middle;
  display: inline-block;

  @media (max-width: 480px) {
    height: 2.5rem;
    margin-left: 0;
  }
`;

const SectionCenter = styled.div`
  margin: 0 auto;
  padding: 6.25rem 3.75rem;
  position: relative;
  max-width: 65.625rem;
  align-items: center;
  box-shadow: inset 0 12.5rem 12.5rem -12.5rem #fff,
    inset 0 -12.5rem 12.5rem -12.5rem #fff;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-bottom: 0.063rem solid #dfdfdf;
  width: 100%;

  @media (max-width: 1080px) {
    max-width: 58.75rem;
    padding-left: 1.25rem;
  }

  @media (max-width: 1000px) {
    padding: 3.75rem 0rem;
    width: 90%;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 0 0 0;
    width: 90%;
    margin: 0 auto;
  }
`;

const CenterDescription = styled.div`
  width: 100%;

  @media (max-width: 1000px) {
    text-align: center;
    margin-top: 0;
    max-width: 100%;
  }
`;

const SkillWikiImg = styled.img`
  ${commonImg};
  @media (max-width: 480px) {
    max-width: 25rem;
    width: 100%;
  }
`;

const GithubImg = styled.img`
  margin-left: 1.25rem;
  height: 3.75rem;
  vertical-align: middle;
  display: inline-block;

  @media (max-width: 480px) {
    height: 2.5rem;
    margin-left: 0;
  }
`;

const OpenSourceImg = styled.img`
  height: 5.313rem;
  display: inline-block;
  vertical-align: middle;

  @media (max-width: 480px) {
    height: 3.75rem;
  }
`;

const CloseIcon = styled(Close)`
  position: absolute;
  z-index: 120000;
  fill: #fff;
  width: 2.5rem;
  height: 2.5rem;
  right: 1.5%;
  top: 1.25rem;
  cursor: pointer;
`;

const MeetSusiVideo = styled.video`
  ${commonImg};
  margin: 1.25rem 0rem;
`;

const Heading = styled.h1`
  font-size: 2.625rem;
  font-weight: 100;
  margin: 0 auto;
  max-width: 55rem;
  font-family: sans-serif;

  @media (max-width: 1000px) {
    font-size: 2.25rem;
    line-height: 2.625rem;
  }
`;

const Para = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 2rem;
  margin: 0.938rem auto;
  max-width: 26.875rem;
  color: #414141;
  font-family: sans-serif;

  @media (max-width: 1000px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const SafeAndSecureSection = styled.div`
  ${commonSection};
  border-bottom: none;

  @media (max-width: 1000px) {
    padding: 6.25rem 0 6.25rem 0rem;
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 0 0 0;
  }
`;

const classes = {
  button: {
    backgroundColor: '#ffffff',
    '&:focus': {
      backgroundColor: '#4285f4',
      color: '#ffffff',
    },
  },
};

const buttonAttributes = [
  { label: 'Search', icon: <Search />, video: WebDemo },
  { label: 'Location', icon: <LocationOn />, video: LocationDemo },
  { label: 'GIFs', icon: <GIF />, video: GIFDemo },
  { label: 'Jokes', icon: <Action />, video: JokesDemo },
  { label: 'Facts', icon: <Web />, video: FactsDemo },
  { label: 'Math', icon: <PlusOne />, video: MathDemo },
];

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifIndex: 0,
      isVideoModalOpen: false,
    };
  }
  // Toggle Video dialog

  toggleVideoModal = () => {
    this.setState(prevState => ({
      isVideoModalOpen: !prevState.isVideoModalOpen,
    }));
  };

  componentDidMount() {
    document.body.style.backgroundColor = '#fff';
    // Adding title tag to page
    document.title =
      'SUSI.AI - Open Source Artificial Intelligence for Personal Assistants, Robots, Help Desks and Chatbots.';
    //  Scrolling to top of page when component loads
    scrollToTopAnimation();

    this.exampleTime = setInterval(() => {
      const { gifIndex } = this.state;
      const newGifIndex = (gifIndex + 1) % 6;
      this.setState({ gifIndex: newGifIndex });
      this.changeGIF(newGifIndex);
    }, 7000);
  }

  componentWillUnmount() {
    clearInterval(this.exampleTime);
  }

  changeGIF(index) {
    this.setState({
      gifIndex: index,
    });
  }

  handleGIFChange = index => {
    this.changeGIF(index);
    clearInterval(this.exampleTime);
  };

  render() {
    const { gifIndex } = this.state;
    return (
      <div>
        <Container>
          <SectionContainer>
            <div>
              <MeetSusiVideo autoPlay loop muted playsinline>
                <source src={SUSIVideo} type="video/mp4" />
              </MeetSusiVideo>
              <Heading>
                Meet SUSI.AI, Your Artificial Intelligence for Personal
                Assistants, Robots, Help Desks and Chatbots.
              </Heading>
              <Para>
                Ask it questions. Tell it to do things. Always ready to help.
              </Para>
              <PlayCircleLink onClick={this.toggleVideoModal}>
                <PlayCircle />
                <WatchSpan>Watch</WatchSpan>
              </PlayCircleLink>
            </div>
          </SectionContainer>
        </Container>
        <Section>
          <ConversationDescription>
            <DescriptionHeading>Ask it anything.</DescriptionHeading>
            <DescriptionText>
              Search for the capital of Vietnam or find translations in
              different languages. Ask SUSI for your location, and what the
              weather’s like when you get there.
            </DescriptionText>
          </ConversationDescription>
          <ImgContainer>
            <SusiTestVideo
              src={susiTestVideo}
              autoPlay
              loop
              muted
              playsinline
            />
          </ImgContainer>
        </Section>
        <Section>
          <ConversationDescription>
            <DescriptionHeading>Explore What it can do.</DescriptionHeading>
            <DescriptionText>
              From finding GIF of your favorite cartoon to exploring new things
              that you never thought of before. Susi can do a lot of things that
              you might not expect. Here are some examples of what SUSI can do.
              <br />
              Don&apos;t forget, these are only a few 😊
            </DescriptionText>
            <RowDiv>
              {buttonAttributes.map((button, index) => (
                <Button
                  key={index}
                  style={
                    gifIndex === index
                      ? { backgroundColor: '#4285f4', color: '#ffffff' }
                      : { backgroundColor: '#ffffff' }
                  }
                  variant="contained"
                  onClick={e => this.handleGIFChange(index)}
                >
                  {button.icon}
                  {button.label}
                </Button>
              ))}
            </RowDiv>
          </ConversationDescription>
          <ImgContainer>
            {buttonAttributes.map((img, index) => (
              <SusiTestVideo
                key={index}
                src={buttonAttributes[gifIndex].video}
                style={gifIndex === index ? {} : { display: 'none' }}
                autoPlay
                muted
                playsinline
              />
            ))}
          </ImgContainer>
        </Section>
        <Section>
          <ConversationDescription>
            <DescriptionHeading>Tell it to do things.</DescriptionHeading>
            <DescriptionText>
              SUSI can listen to you through the Mic and answer back on your
              Speaker. You can activate the assistant saying
              <b> &quot;Hi SUSI&quot;</b> already on many clients and devices.
              The more you talk with SUSI the better it gets. You can even tell
              SUSI to remember things.
            </DescriptionText>
          </ConversationDescription>
          <ImgContainer>
            <AndroidMockupImg src={mapAndroid} alt="Map" />
          </ImgContainer>
        </Section>
        <Section>
          <ConversationDescription>
            <DescriptionHeading>For your Smartphone</DescriptionHeading>
            <DescriptionText>
              SUSI is available for <b>Android</b>
              &nbsp;and <b>iOS devices</b>. Download the App to have access to
              SUSI on the go.
            </DescriptionText>
            <DescriptionText>
              <PlayStore
                rel="noopener noreferrer"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=ai.susi"
              >
                {' '}
                Get it on Google Play
              </PlayStore>
              <AppStore
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/fossasia/susi_iOS"
              >
                {' '}
                Download on the App Store
              </AppStore>
            </DescriptionText>
          </ConversationDescription>
          <ImgContainer>
            <AndroidMockupImg src={androidMockup} alt="Android Mockup" />
          </ImgContainer>
        </Section>
        <Section style={{ alignItems: 'unset' }}>
          <ColumnSection>
            <CustomDescription>
              <CustomImgContainer>
                <BotsMockupImg src={bots} alt="Android Mockup" />
              </CustomImgContainer>
              <CustomDescriptionHeading>
                On many Platforms
              </CustomDescriptionHeading>
              <DescriptionText>
                <b>SUSI.AI</b> already runs on many chat services and social
                networks. We are developing plugins for all major services
                including &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/fossasia/susi_tweetbot"
                >
                  Twitter
                </a>
                , &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/fossasia/susi_fbbot"
                >
                  Facebook
                </a>
                , &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/fossasia/susi_linebot"
                >
                  Line
                </a>
                , &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/fossasia/susi_slackbot"
                >
                  Slack
                </a>
                , &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/fossasia/susi_wechatbot"
                >
                  We Chat
                </a>
                , &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/fossasia/susi_viberbot"
                >
                  Viber
                </a>
                , &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/fossasia/susi_gitterbot"
                >
                  Gitter
                </a>
                . Just set up SUSI on your channel and add &nbsp;<b>@susi</b> in
                your conversations and SUSI is ready to help.
              </DescriptionText>
            </CustomDescription>
          </ColumnSection>
          <ColumnSection>
            <CustomDescription>
              <CustomImgContainer>
                <BotsMockupImg src={allDevices} alt="Android Mockup" />
              </CustomImgContainer>
              <CustomDescriptionHeading>
                For all Devices
              </CustomDescriptionHeading>
              <DescriptionText>
                <b>SUSI.AI</b> is available for any android, iOS device and also
                you can access the web chat application from this URL{' '}
                <a href={urls.CHAT_URL}>{urls.CHAT_URL}</a>
              </DescriptionText>
            </CustomDescription>
          </ColumnSection>
          <ColumnSection>
            <CustomDescription>
              <CustomImgContainer>
                <BotsMockupImg src={manyLanguages} alt="Android Mockup" />
              </CustomImgContainer>
              <CustomDescriptionHeading>
                Use it in many Languages
              </CustomDescriptionHeading>
              <DescriptionText>
                You can use <b>SUSI.AI</b> in different languages. You can ask
                questions in many languages. SUSI is intelligent to identify and
                answer your question in your language.
              </DescriptionText>
            </CustomDescription>
          </ColumnSection>
        </Section>
        <SectionCenter>
          <CenterDescription>
            <DescriptionHeading style={{ textAlign: 'center' }}>
              SUSI Skills
            </DescriptionHeading>
            <DescriptionText>
              SUSI is having many skills. You can look at the collection of
              skills at{' '}
              <Link to="/" style={{ textDecoration: 'none' }} target="_blank">
                susi.ai
              </Link>{' '}
              SUSI skills are divided into groups like knowledge, assistant,
              problem solving, entertainment, shopping and small talks. SUSI
              Skill development is easy and fun.{' '}
            </DescriptionText>
          </CenterDescription>
          <CustomImgContainer>
            <SkillWikiImg src={susiSkill} alt="Skills" />
          </CustomImgContainer>
        </SectionCenter>
        <SafeAndSecureSection>
          <ConversationDescription>
            <DescriptionHeading>Safe and secure.</DescriptionHeading>
            <DescriptionText>
              <b>SUSI.AI</b> is{' '}
              <b>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#000' }}
                  href="https://github.com/fossasia?utf8=%E2%9C%93&q=susi"
                >
                  Open Source
                </a>
              </b>
              . The code is always available for security reviews and can be
              improved by anyone with the knowledge and understanding online.
            </DescriptionText>
            <OpenSourceLogos>
              <OpenSource>
                <a
                  rel="noopener noreferrer"
                  href="https://opensource.org/"
                  target="_blank"
                >
                  <OpenSourceImg src={openSource} alt="osi" />
                </a>
              </OpenSource>
              <GithubLogo>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/fossasia?utf8=✓&q=susi"
                  target="_blank"
                >
                  <GithubImg src={githubText} alt="ghlogo" />
                </a>
              </GithubLogo>
            </OpenSourceLogos>
          </ConversationDescription>
          <ImgContainer>
            <ShieldImg src={shield} alt="Android Mockup" />
          </ImgContainer>
        </SafeAndSecureSection>
        {/* Video */}
        <VideoModal
          isOpen={this.state.isVideoModalOpen}
          onRequestClose={this.toggleVideoModal}
          contentLabel="Assistant Video"
          overlayClassName="Video-Overlay"
        >
          <VideoContainer>
            <Iframe
              id="player"
              title="SUSI features Video"
              type="text/html"
              frameBorder="0"
              allowFullScreen
              src="https://www.youtube.com/embed/tIG5griC-G0?enablejsapi=1&autoplay=1"
            />
            <CloseIcon onClick={this.toggleVideoModal} />
          </VideoContainer>
        </VideoModal>
      </div>
    );
  }
}
Overview.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  classes: PropTypes.object,
};
export default withStyles(classes)(Overview);

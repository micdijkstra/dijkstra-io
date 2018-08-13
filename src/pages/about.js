import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import {Container, Row} from '../components/Layout';
import {Page} from '../components/Page';
import {AsidePrimary, AsideSecondary} from '../components/Aside';
import {LeadText, ReadingText} from '../components/Text';

import {media} from '../utils/style';

const AboutPage = Page.extend`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.onDark};

  a {
    &:after {
      background-color: ${props => props.theme.colors.secondary};
    }
  }
`;

const AboutRow = Row.extend`
  margin-bottom: ${props => props.theme.spacing.lg};

  ${media.sm`
    flex-direction: row;
  `};
`;

const SectionTitle = styled.div`
  display: flex;
  margin-top: 5px;
`;

const SectionTitlePrimary = AsidePrimary.extend`
  width: 100px;
`;
const SectionTitleSecondary = AsideSecondary.extend``;

class About extends React.Component {
  render() {
    const {transition} = this.props;

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>About | Michael Dijkstra</title>
        </Helmet>
        <AboutPage>
          <Container>
            <LeadText>
              <p>
                <a href="/">Michael Dijkstra</a> is a product-minded software
                developer with more than 10 years experience working across the
                entire product stack.
              </p>
            </LeadText>
            <AboutRow>
              <SectionTitle>
                <SectionTitlePrimary>Currently</SectionTitlePrimary>
                <SectionTitleSecondary>
                  Lead Front-end Engineer at Q-CTRL
                </SectionTitleSecondary>
              </SectionTitle>
              <ReadingText>
                <p>
                  As Lead Front-Engineer it is my responsibility to oversee all
                  front-end implementation, development and operations for Black
                  Opal, the Software as a Service product offered by Q-CTRL.
                </p>
                <p>
                  Unlike a banking or ecommerce app, there was no path to follow
                  for a digital quantum Control product, so modelling how users
                  interact and what information is returned has been unique and
                  challenging. I oversee a team of three front-end developers
                  and worked closely with back-end and quantum engineers to
                  prioritise and scope features.
                </p>

                <p>
                  The product is built in ReactJS, hosted on Firebase and
                  integrates with the Firebase Realtime Database and Google
                  Cloud Functions. Front-end integration tests are written using
                  Jest and Enzyme.
                </p>
              </ReadingText>
            </AboutRow>

            <AboutRow>
              <SectionTitle>
                <SectionTitlePrimary>Since 2013</SectionTitlePrimary>
                <SectionTitleSecondary>
                  Co-Founder and CTO of Frontrow Ventures
                </SectionTitleSecondary>
              </SectionTitle>
              <ReadingText>
                <p>
                  Front Row Ventures is a finance and technology incubator,
                  focused on solving existing problems through disciplined
                  market validation and the adaptation of business models. Post
                  concept validation Front Row partners with industry players
                  who bring a strategic distribution advantage for scale.
                </p>
              </ReadingText>
            </AboutRow>

            <AboutRow>
              <SectionTitle>
                <SectionTitlePrimary>&nbsp;</SectionTitlePrimary>
                <SectionTitleSecondary>Wise</SectionTitleSecondary>
              </SectionTitle>
              <ReadingText>
                <p>
                  <a href="http://www.wiseapp.com">Wise</a> is a shared reading
                  list for teams built in Ruby on Rails making use of Turbolinks
                  for fast page loads and transitions. The app authenticates and
                  integrates with Slack. Unit and integration tests are written
                  in Rspec.
                </p>
              </ReadingText>
            </AboutRow>

            <AboutRow>
              <SectionTitle>
                <SectionTitlePrimary>&nbsp;</SectionTitlePrimary>
                <SectionTitleSecondary>Small Victories</SectionTitleSecondary>
              </SectionTitle>
              <ReadingText>
                <p>
                  <a href="http://www.smallvictories.com">Small Victories</a>{' '}
                  turns a Dropbox folder into a website. The application is
                  built in Ruby on Rails and authenticates and integrates with
                  Dropbox. Unit and integration tests are written in Rspec.
                </p>
              </ReadingText>
            </AboutRow>

            <AboutRow>
              <SectionTitle>
                <SectionTitlePrimary>Since 2014</SectionTitlePrimary>
                <SectionTitleSecondary>
                  Freelance Web and Mobile Developer
                </SectionTitleSecondary>
              </SectionTitle>
              <ReadingText>
                <p>
                  Working directly with designers such as Jacob and Jake from
                  XXIX and Wade Jeffree and Leta Sobierajski from Ikko Ikko, I
                  developed websites and applications for clients all over the
                  world including Dropbox, BuzzFeed, AIG Eye on Design, Rough
                  Trade.
                </p>
                <p>
                  I built websites, web applications and iOS applications in
                  technologies such as HTML, JavaScript, ReactJS, EmberJS,
                  CSS/Sass, Ruby, Python, Swift and Go.
                </p>
              </ReadingText>
            </AboutRow>

            <AboutRow>
              <SectionTitle>
                <SectionTitlePrimary>2013-2014</SectionTitlePrimary>
                <SectionTitleSecondary>
                  Head of Product at PwC Australia
                </SectionTitleSecondary>
              </SectionTitle>
              <ReadingText>
                <p>
                  As Head of Product I was in charge of Product Management and
                  Web Development for PwC Australia&rsquo;s Digital Ventures.
                </p>
                <p>
                  During my time at PwC I oversaw a team of 6 and developed
                  digital products for charity, mining and internal teams.
                </p>
              </ReadingText>
            </AboutRow>

            <AboutRow>
              <SectionTitle>
                <SectionTitlePrimary>2012-2013</SectionTitlePrimary>
                <SectionTitleSecondary>
                  Co-Founder<br />of Storyberg
                </SectionTitleSecondary>
              </SectionTitle>
              <ReadingText>
                <p>
                  Helping people build a more successful startup by following
                  the Lean Startup process.{' '}
                  <a href="http://www.storyberg.com">Storyberg</a> is a a Lean
                  Kanban Management Tool that helps you collaborate better with
                  your team and win investors with your story.
                </p>

                <p>
                  Storyberg was accepted into the 2013{' '}
                  <a href="http://www.startmate.com.au">Startmate</a> program.
                </p>
              </ReadingText>
            </AboutRow>

            <AboutRow>
              <SectionTitle>
                <SectionTitlePrimary>2011-2012</SectionTitlePrimary>
                <SectionTitleSecondary>
                  Lean Product Manager at Pollenizer
                </SectionTitleSecondary>
              </SectionTitle>
              <ReadingText>
                <p>
                  Pollenizer was Australia&rquo;s first and largest startup
                  incubator. During my time at Pollenizer I worked as founding
                  product manager on a number of new ventures including:
                </p>
                <ul>
                  <li>
                    <a href="http://www.wooboard.com">Wooboard</a>, an employee
                    recognition platform
                  </li>
                  <li>Pygg, a peer-to-peer payment platform.</li>
                  <li>
                    Unrenovated, a site exclusively for unrenovated properties
                    in Sydney’s Inner West.
                  </li>
                  <li>
                    Ryuu, an app putting you back in control, so you can reach
                    your full potential and be more productive, every day.
                  </li>
                  <li>
                    GetListed, a social recruitment website that works on
                    personal recommendations
                  </li>
                </ul>

                <p>
                  I also led the inaugural Lean Product Manager course through
                  Pollenizer Academy and spoke at the Sydney Lean Startup
                  Machine weekend.
                </p>
              </ReadingText>
            </AboutRow>

            <AboutRow>
              <SectionTitle>
                <SectionTitlePrimary>Site</SectionTitlePrimary>
                <SectionTitleSecondary>
                  <br />Credits
                </SectionTitleSecondary>
              </SectionTitle>
              <ReadingText>
                <p>
                  This website was designed by{' '}
                  <a
                    href="http://www.wadejeffree.com"
                    target="_blank"
                    rel="noopener noreferrer">
                    Wade Jeffree
                  </a>, built with{' '}
                  <a
                    href="https://www.gatsbyjs.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Gatsby.js
                  </a>, managed with{' '}
                  <a
                    href="https://www.contentful.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Contentful
                  </a>{' '}
                  and hosted on{' '}
                  <a
                    href="https://www.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Netlify
                  </a>.
                </p>
              </ReadingText>
            </AboutRow>
          </Container>
        </AboutPage>
      </div>
    );
  }
}

About.propTypes = {
  transition: PropTypes.object,
};

export default About;

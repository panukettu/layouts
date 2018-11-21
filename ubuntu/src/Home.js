import React from 'react';
import Header, { Title, Menu } from './components/Header';
import Body, { SubHeader, FullImage } from './components/Body';
import Sidemenu from './components/Sidemenu';
import Tabs, {
  TabList,
  Tab,
  TabPanels,
  Panel,
  PanelTitle,
  PanelContent
} from './components/Tabs';
import Beer from './components/Beer';
import Burger from './components/Burger';

const Home = () => {
  const rotate = (element, deg, ...effects) => {
    effects.forEach(effect => effect());
    element.classList.toggle(`rotate${deg}`);
  };

  return (
    <>
      <Header>
        <Title>Home</Title>
        <Menu />
      </Header>
      <Sidemenu handleClick={rotate} />
      <Body>
        <SubHeader>Welcome, check out these tabs</SubHeader>
        <Tabs>
          <TabList>
            <Tab>Food</Tab>
            <Tab>Weather</Tab>
            <Tab>Travel</Tab>
          </TabList>
          <TabPanels>
            <Panel style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignContent: 'space-around',
                  flexWrap: 'wrap',
                  fontFamily: 'Lobster',
                  fontSize: '1.25em'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                  }}
                >
                  <Beer
                    width="3em"
                    height="3em"
                    style={{
                      backgroundColor: 'rgba(255, 75, 0, 0.1)',
                      borderRadius: '50px',
                      fill: 'orange',
                      padding: '10px',
                      margin: '25px'
                    }}
                  />
                  <h3>Beer</h3>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                  }}
                >
                  <Burger
                    width="3em"
                    height="3em"
                    style={{
                      fill: 'brown',
                      padding: '10px',
                      margin: '25px',
                      borderRadius: '25px',
                      backgroundColor: 'rgba(255, 75, 0, 0.1)'
                    }}
                  />
                  <h3>Meat burgers</h3>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                  }}
                >
                  <Burger
                    width="3em"
                    height="3em"
                    style={{
                      fill: 'green',
                      padding: '10px',
                      margin: '25px',
                      borderRadius: '25px',
                      backgroundColor: 'rgba(255, 255, 0, 0.1)'
                    }}
                  />
                  <h3>Vege burgers</h3>
                </div>
              </div>
            </Panel>
            <Panel>
              <HorizontalSplit>
                <PanelTitle>What is weather?</PanelTitle>
                <PanelContent>
                  Weather is the state of the atmosphere, describing for example
                  the degree to which it is hot or cold, wet or dry, calm or
                  stormy, clear or cloudy.Most weather phenomena occur in the
                  lowest level of the atmosphere, the troposphere, just below
                  the stratosphere. Weather refers to day-to-day temperature and
                  precipitation activity, whereas climate is the term for the
                  averaging of atmospheric conditions over longer periods of
                  time. When used without qualification, "weather" is generally
                  understood to mean the weather of Earth.
                </PanelContent>
              </HorizontalSplit>
            </Panel>
            <Panel>
              <FullImage
                src="https://picsum.photos/400"
                style={{ width: '50%', height: '500px' }}
              />
              <HorizontalSplit>
                <PanelTitle>Explaining travel</PanelTitle>
                <PanelContent>
                  Travel is the movement of people between distant geographical
                  locations. Travel can be done by foot, bicycle, automobile,
                  train, boat, bus, airplane, or other means, with or without
                  luggage, and can be one way or round trip. Travel can also
                  include relatively short stays between successive movements.
                </PanelContent>
              </HorizontalSplit>
            </Panel>
          </TabPanels>
        </Tabs>
      </Body>
    </>
  );
};

const HorizontalSplit = ({ children }) => (
  <div className="horizontal-split">{children}</div>
);

export default Home;

/* eslint-disable react/prop-types */
// import { PropTypes } from "prop-types";

import React, { useContext, useState } from "react";
import { graphql } from "gatsby";
import Layout from "~components/Layout";
import SEO from "~components/SEO";
import Button from "~components/Button";

// import DataFall from "~components/DataFall";
import TextCycler from "~components/TextCycler";
import Line from "~components/svg/Line";
import Spaceship from "~components/Spaceship";
import Horizon from "~components/svg/Horizon";
import HillOne from "~components/svg/HillOne";
import HillThree from "~components/svg/HillThree";
import stillStatic from "~assets/images/static.png";
import StaticWall from "~components/StaticWall";
import CactusOne from "~components/svg/CactusOne";
import CactusTwo from "~components/svg/CactusTwo";
import Bush from "~components/svg/Bush";
import Ball from "~components/svg/Ball";
import LastHill from "~components/svg/LastHill";
import Smoke from "~components/svg/Smoke";
import SteveDidYouFillUp from "~components/svg/SteveDidYouFillUp";
import FuckingHellNotAgain from "~components/svg/FuckingHellNotAgain";
import WhereAreWe from "~components/svg/WhereAreWe";
import staticGIF from "~assets/images/static.gif";

const IndexPage = ({ data, location }) => {
  let motion = null;
  let cursorContext = { cursorCenterDeltaX: 0, cursorCenterDeltaY: 0 };

  if (typeof window !== `undefined`) {
    // eslint-disable-next-line
    motion = require(`framer-motion`).motion;
    // eslint-disable-next-line
    const CursorContext = require("~context/CursorContext").CursorContext;
    cursorContext = useContext(CursorContext);
  }

  const { frontmatter } = data.markdownRemark;

  const { cursorCenterDeltaX, cursorCenterDeltaY } = cursorContext;
  const cursorAnimate = magnitude => ({
    x: magnitude * cursorCenterDeltaX,
    y: magnitude * cursorCenterDeltaY
  });

  const plantProperties = {
    cactusOne: {
      balance: [`top-10vw`, `top-20vw`],
      scale: [`w-full`, `w-2/1`, `w-1/3`]
    },
    cactusTwo: {
      balance: [`top-1vw`, `top-10vw`],
      scale: [`w-full`, `w-1/2`, `w-2/5`]
    },
    ball: {
      balance: [`top-20vw`, `top-19vw`],
      scale: [`w-full`, `w-1/3`, `w-4/5`]
    },
    bush: {
      balance: [`top-30vw`, `top-27vw`],
      scale: [`w-3/2`, `w-1/2`, `w-3/1`]
    }
  };

  const colours = [`#DFDFDF`, `red`, `green`, `purple`, `orange`, `pink`];

  const [balanceIndex, setBalanceIndex] = useState(0);
  const [scaleIndex, setScaleIndex] = useState(0);
  const [colourIndex, setColourIndex] = useState(0);
  const [showLine, setShowLine] = useState(false);
  const [showGridLines, setShowGridLines] = useState(false);
  const [showStaticOverlay, setShowStaticOverlay] = useState(false);
  const [typographyClicks, setTypographyClicks] = useState(0);
  const [hillHasDepth, setHillHasDepth] = useState(false);
  const [textCyclerIsCycling, setTextCyclerIsCycling] = useState(false);

  const { cactusOne, cactusTwo, bush, ball } = plantProperties;

  return (
    <>
      <SEO
        customTitle={frontmatter.title}
        customDescription={frontmatter.seoDescription}
        customKeywords={frontmatter.seoKeywords}
        path={location.pathname}
      />

      <Layout className="index-page w-full relative">
        <section className="min-h-screen grid items-center border-b-2 border-solid py-8 f1">
          <div className="grid-end-12 relative mb-24 lg:mb-0">
            <h1 className="animation-appear-right z-10 f1">
              {frontmatter.title}
            </h1>

            {motion !== null ? (
              <motion.div
                className="absolute top-30pc right-0 w-1/5"
                animate={cursorAnimate(50)}
              >
                <Spaceship className="w-full relative" img={staticGIF} />
              </motion.div>
            ) : (
              <div className="absolute top-30pc right-0 w-1/5">
                <Spaceship className="w-full relative" img={staticGIF} />
              </div>
            )}
          </div>
        </section>

        <section className="w-full flex items-top justify-center relative">
          <div className="relative block -z-10 overflow-hidden">
            <Line />
            <div
              className={`transition-top--ease w-full h-full absolute ${
                showLine ? `top-full` : `top-0`
              } right-0 bottom-0 left-0 bg-white `}
            />
          </div>

          <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0">
            <div className="w-full h-screen relative py-16 flex flex-col justify-between">
              <article className="w-5/12 pl-8">
                <p className="b1">
                  For the last few months I’ve spent at least a seventh of my
                  week dabbling in design, with help from Pat.
                </p>
              </article>

              <article className="w-5/12 top-0 right-0 self-end pr-8">
                <p className="b1">
                  I’d never had any formal design training. I therefore learned
                  about heaps of important stuff.
                </p>
              </article>

              <article className="relative block pl-8 mt-12">
                <Button
                  className="inline-block mb-2"
                  text="Like rhythm,"
                  onClick={() => setShowLine(true)}
                />
                <p className="caption">↑ click these</p>
              </article>
            </div>
          </div>

          <div className="absolute -z-20 left-0 bottom-0 right-0">
            <Horizon className="w-full" />
          </div>

          <article className="w-1/2 absolute bottom-0 mb-40 mr-24">
            <Button
              className="w-content"
              text="and depth,"
              onClick={() => {
                setHillHasDepth(oldBool => !oldBool);
              }}
            />
          </article>

          <div
            className="w-full absolute -z-30 bottom-0"
            style={{ height: `26vw` }}
          >
            {/* {typeof window !== `undefined` && (
              <DataFall className="w-full h-full" />
            )} */}
          </div>
        </section>

        <section
          className="w-full relative block"
          style={{ marginTop: `-8rem` }}
        >
          <HillOne className="w-full top-0 left-0 right-0" />
          <HillOne
            colour="white"
            className={`transition-opacity w-full absolute top-0 left-0 right-0 ${
              hillHasDepth ? `opacity-0` : `opacity-1`
            }`}
          />

          <div
            className="w-full absolute -z-10 overflow-hidden"
            style={{ height: `50vw`, top: `10vw` }}
          >
            <StaticWall
              className={`w-full h-full ${
                showStaticOverlay ? `mt-0` : `mt-full`
              } relative block transition-margin-top`}
              overlayStyle={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.85) 34.9%, rgba(255, 255, 255, 0.25) 100%)`
              }}
            />
          </div>

          <div className="w-fill grid">
            <article className="grid-end-2 grid-start-11">
              <Button
                text="and texture,"
                onClick={() => {
                  setShowStaticOverlay(oldValue => !oldValue);
                }}
              />
            </article>
          </div>

          <HillThree
            className="w-full top-0 left-0 right-0"
            style={{ marginTop: `-36px` }}
          />
        </section>

        <section className="w-full relative">
          <div
            className="w-full grid"
            style={{ height: `75vw`, marginTop: `-25vw` }}
          >
            <article
              className="grid-end-3 grid-start-1"
              style={{ marginTop: `10vw` }}
            >
              <Button
                text="and balance,"
                onClick={() => {
                  setBalanceIndex(
                    oldIndex =>
                      (oldIndex + 1) %
                      plantProperties[Object.keys(plantProperties)[0]].balance
                        .length
                  );
                }}
              />
            </article>

            <article
              className="grid-end-2 grid-start-9 absolute"
              style={{ bottom: `47vw` }}
            >
              <Button
                text="and scale,"
                onClick={() => {
                  setScaleIndex(
                    oldIndex =>
                      (oldIndex + 1) %
                      plantProperties[Object.keys(plantProperties)[0]].scale
                        .length
                  );
                }}
              />
            </article>

            <article
              className="grid-end-3 grid-start-1 absolute"
              style={{ bottom: `18vw` }}
            >
              <Button
                text="and the grid,"
                onClick={() =>
                  setShowGridLines(oldShowGridLines => !oldShowGridLines)
                }
              />
            </article>

            <div
              className={`grid-end-1 grid-start-2 transition-top absolute overflow-visible ${ball.balance[balanceIndex]} pointer-events-none`}
            >
              <Ball
                id="ball"
                className={`transition-width ${ball.scale[scaleIndex]} overflow-visible`}
              />
            </div>

            <div
              className={`grid-end-5 grid-start-3 transition-top absolute overflow-visible ${bush.balance[balanceIndex]} pointer-events-none`}
            >
              <Bush
                id="bush"
                className={`transition-width ${bush.scale[scaleIndex]} overflow-visible`}
              />
            </div>

            <div
              className={`grid-end-1 grid-start-6 transition-top absolute overflow-visible ${cactusTwo.balance[balanceIndex]} pointer-events-none`}
            >
              <CactusTwo
                id="cactusTwo"
                className={`transition-width ${cactusTwo.scale[scaleIndex]} overflow-visible`}
              />
            </div>

            <div
              className={`grid-end-2 grid-start-11 transition-top absolute overflow-visible ${cactusOne.balance[balanceIndex]} pointer-events-none`}
            >
              <CactusOne
                id="cactusOne"
                className={`transition-width ${cactusOne.scale[scaleIndex]} overflow-visible`}
              />
            </div>
          </div>

          <div
            className="w-full absolute -z-10 grid top-0 right-0 bottom-0 left-0 transition-height pointer-events-none"
            style={{ position: `absolute`, height: showGridLines ? `120%` : 0 }}
          >
            {new Array(12).fill(null).map((_, gridIndex) => {
              const key = `griditem-${gridIndex}`;
              return (
                <div
                  key={key}
                  className={`h-full grid-start-${gridIndex +
                    1} grid-end-1 border-red border-solid border-l-1 border-r-1 transition-border`}
                />
              );
            })}
          </div>
        </section>

        <section className="w-full relative">
          <LastHill className="w-full relative -z-10" />

          <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0">
            <div
              className="w-1/3 relative"
              style={{ marginTop: `20vw`, marginLeft: `calc(16.66% + 1rem)` }}
            >
              <Smoke
                className="w-2/5 absolute -z-10 overflow-visible"
                style={{ bottom: `50%`, left: `-17%` }}
                colour={colours[colourIndex]}
              />

              <Spaceship
                maskColour="#F5F5F5"
                glassStyle={{
                  backgroundColor: colours[colourIndex],
                  opacity: 0.2
                }}
              />

              {typographyClicks > 0 && (
                <WhereAreWe
                  className="h-3 absolute"
                  style={{ right: `-15%`, top: `40%` }}
                />
              )}

              {typographyClicks > 1 && (
                <SteveDidYouFillUp
                  className="h-4 absolute"
                  style={{ right: `-65%`, top: `60%` }}
                />
              )}

              {typographyClicks > 2 && (
                <FuckingHellNotAgain
                  className="h-5 absolute"
                  style={{ right: `-38%`, top: `82%` }}
                />
              )}
            </div>
          </div>

          <div
            className="w-full h-full grid z-20 top-0 right-0 bottom-0 left-0"
            style={{ position: `absolute` }}
          >
            <article className="grid-end-3 h-full grid-start-6 relative">
              <Button
                className="absolute"
                style={{ top: `15vw` }}
                text="and colour,"
                onClick={() => {
                  setColourIndex(oldIndex => (oldIndex + 1) % colours.length);
                }}
              />
            </article>

            <article className="grid-end-3 h-full grid-start-10 relative">
              <Button
                className="absolute"
                text="and typography,"
                style={{ top: `50vw` }}
                onClick={() => {
                  setTypographyClicks(oldNum => oldNum + 1);
                }}
              />
            </article>

            <article
              className="grid-end-4 h-full grid-start-2 relative flex flex-col justify-end"
              style={{ paddingBottom: `13vw` }}
            >
              <Button
                className="w-content whitespace-no-wrap"
                onMouseDown={() => {
                  setTextCyclerIsCycling(true);
                }}
                onMouseUp={() => {
                  setTextCyclerIsCycling(false);
                }}
                text="and heaps more stuff.."
              />

              <div
                className="absolute pt-20"
                style={{ transform: `translateY(100%)` }}
              >
                <TextCycler
                  className={`opacity-${textCyclerIsCycling ? 1 : 0} caption`}
                  cycling={textCyclerIsCycling}
                />
              </div>
            </article>
          </div>
        </section>

        <section className="w-full grid">
          <article className="grid-end-5 grid-start-8 py-24">
            <p className="b1">
              I learned how to combine different forms of these things to read
              or tell a story. I learned that it’s really fun.
            </p>
            <p className="mt-8 b1">
              Shout out to P-daddy and C-dog for the guidance and the
              opportunity.
            </p>
          </article>
          <h2 className="grid-end-10 grid-start-3 pt-32 pb-64 f1">The End</h2>
        </section>
      </Layout>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        seoDescription
        seoKeywords
      }
    }
  }
`;

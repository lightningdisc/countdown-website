import { ChakraProvider, Heading, Image, extendTheme } from "@chakra-ui/react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyles from "../components/globals";
import {
  Body,
  BodyWrapper,
  BodyWrapperDone,
  CountMainWrapper,
  CountWrapper,
  Header,
  HeaderWrapper,
  JoinDiscord,
  JoinDiscordWrapper,
  MainHeaderWrapper,
  MainWrapper,
  SubHeading,
  SubHeadingWrapper,
} from "../components/shared";
import "./index.css";
import { useEffect, useMemo, useState } from "react";
import Head from "next/head";

const theme: DefaultTheme = {
  colors: {
    primary: "white",
    secondary: "black",
  },
};

export default function App() {
  const endDate = new Date("July 10, 2023 12:00:00 GMT-5").getTime();

  const [date, setDate] = useState(endDate - new Date().getTime());
  const [loaded, setLoaded] = useState(false);

  const [days] = useMemo(() => {
    const days = Math.floor(date / (1000 * 60 * 60 * 24));
    return [days];
  }, [date]);

  const [hours] = useMemo(() => {
    const hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return [hours];
  }, [date]);

  const [minutes] = useMemo(() => {
    const minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
    return [minutes];
  }, [date]);

  const [seconds] = useMemo(() => {
    const seconds = Math.floor((date % (1000 * 60)) / 1000);
    return [seconds];
  }, [date]);

  useEffect(() => {
    setLoaded(true);
    if (date <= 0) return;

    const interval = setInterval(() => {
      setDate(endDate - new Date().getTime());
    }, 999);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loaded)
    return (
      <>
        <Head>
          <title>Lightning - Coming Soon</title>
        </Head>
        <ChakraProvider
          theme={extendTheme({
            colors: {
              body: {
                bg: "#07050F",
              },
            },
          })}
        >
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Body>
              <MainWrapper>
                <MainHeaderWrapper>
                  <HeaderWrapper>
                    <Header>
                      <Heading
                        color="white"
                        textTransform={"uppercase"}
                        fontSize={{
                          base: "4rem",
                          md: "4rem",
                          lg: "5rem",
                        }}
                        fontFamily={"Futura xblk bt"}
                        lineHeight={{
                          base: "46px",
                          md: "46px",
                          lg: "66px",
                        }}
                        textShadow={{
                          base: "none",
                          md: "none",
                          lg: "0px 0px 36px rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        lightning
                      </Heading>
                    </Header>
                    <SubHeadingWrapper>
                      <SubHeading>
                        <Heading
                          color="#7649F9"
                          textTransform={"uppercase"}
                          fontSize={"40px"}
                          fontFamily={"Futura xblk bt"}
                          textShadow={{
                            base: "none",
                            md: "none",
                            lg: "0px 0px 20px rgba(118, 73, 249, 0.6)",
                          }}
                        >
                          BETA
                        </Heading>
                        <Heading
                          color="white"
                          textTransform={"none"}
                          fontSize={"24px"}
                          fontFamily={"Futura xblk bt"}
                          pb={"4px"}
                        >
                          — v5.0.0
                        </Heading>
                      </SubHeading>
                    </SubHeadingWrapper>
                  </HeaderWrapper>
                </MainHeaderWrapper>
                {date <= 0 ? (
                  <>
                    <BodyWrapperDone>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          marginTop: "80px",
                        }}
                      >
                        <Heading
                          color="white"
                          textTransform={"uppercase"}
                          fontSize={{
                            base: "2rem",
                            md: "4rem",
                            lg: "5rem",
                          }}
                          fontFamily={"Futura xblk bt"}
                          lineHeight={{
                            base: "46px",
                            md: "46px",
                            lg: "66px",
                          }}
                        >
                          Yes, we are on it!
                        </Heading>
                        <Heading
                          marginTop="50px"
                          as="h2"
                          fontSize={{
                            base: "24px",
                            md: "30px",
                            lg: "2rem",
                          }}
                          color="white"
                        >
                          Our team is working hard to bring you a whole new set of features and improvements that we think you'll love.
                        </Heading>
                      </div>
                    </BodyWrapperDone>
                  </>
                ) : (
                  <BodyWrapper>
                    <Header
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <JoinDiscordWrapper>
                        <JoinDiscord
                          href="https://discord.gg/NerwGFSpTb"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Join our Discord
                        </JoinDiscord>
                      </JoinDiscordWrapper>
                    </Header>
                    <CountMainWrapper>
                      <CountWrapper>
                        <Heading
                          color="white"
                          textTransform={"uppercase"}
                          fontSize={{
                            base: "4rem",
                            md: "6rem",
                            lg: "9rem",
                          }}
                          fontFamily={"Futura xblk bt"}
                          lineHeight={"86px"}
                          textShadow={{
                            base: "none",
                            md: "none",
                            lg: "0px 0px 36px rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          {days}
                        </Heading>
                        <Heading
                          as="h2"
                          size="xl"
                          color="white"
                          fontSize={"36px"}
                          lineHeight={{
                            base: "10px",
                            md: "30px",
                            lg: "70px",
                          }}
                        >
                          Days
                        </Heading>
                      </CountWrapper>
                      <CountWrapper>
                        <Heading
                          color="white"
                          textTransform={"uppercase"}
                          fontSize={{
                            base: "4rem",
                            md: "6rem",
                            lg: "9rem",
                          }}
                          fontFamily={"Futura xblk bt"}
                          lineHeight={"86px"}
                          textShadow={{
                            base: "none",
                            md: "none",
                            lg: "0px 0px 36px rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          {hours}
                        </Heading>
                        <Heading
                          as="h2"
                          size="xl"
                          color="white"
                          fontSize={"36px"}
                          lineHeight={{
                            base: "10px",
                            md: "30px",
                            lg: "70px",
                          }}
                        >
                          Hours
                        </Heading>
                      </CountWrapper>
                      <CountWrapper>
                        <Heading
                          color="white"
                          textTransform={"uppercase"}
                          fontSize={{
                            base: "4rem",
                            md: "6rem",
                            lg: "9rem",
                          }}
                          fontFamily={"Futura xblk bt"}
                          lineHeight={"86px"}
                          textShadow={{
                            base: "none",
                            md: "none",
                            lg: "0px 0px 36px rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          {minutes}
                        </Heading>
                        <Heading
                          as="h2"
                          size="xl"
                          color="white"
                          fontSize={"36px"}
                          lineHeight={{
                            base: "10px",
                            md: "30px",
                            lg: "70px",
                          }}
                        >
                          Minutes
                        </Heading>
                      </CountWrapper>
                      <CountWrapper>
                        <Heading
                          color="white"
                          textTransform={"uppercase"}
                          fontSize={{
                            base: "4rem",
                            md: "6rem",
                            lg: "9rem",
                          }}
                          fontFamily={"Futura xblk bt"}
                          lineHeight={"86px"}
                          textShadow={{
                            base: "none",
                            md: "none",
                            lg: "0px 0px 36px rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          {seconds}
                        </Heading>
                        <Heading
                          as="h2"
                          size="xl"
                          color="white"
                          fontSize={"36px"}
                          lineHeight={{
                            base: "10px",
                            md: "30px",
                            lg: "70px",
                          }}
                        >
                          Seconds
                        </Heading>
                      </CountWrapper>
                    </CountMainWrapper>
                  </BodyWrapper>
                )}
              </MainWrapper>
            </Body>
          </ThemeProvider>
        </ChakraProvider>
      </>
    );
  else
    return (
      <>
        <Head>
          <title>Lightning - Coming Soon</title>
        </Head>
        <ChakraProvider
          theme={extendTheme({
            colors: {
              body: {
                bg: "#07050F",
              },
            },
          })}
        ></ChakraProvider>
      </>
    );
}

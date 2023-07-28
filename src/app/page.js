import Image from "next/image";
import SectionGrid, { Contents } from "./components/section/SectionGrid";
import { FadeMotion, ScrollMotion, ScaleMotion } from "./components/motion/Motion";
import { Box } from "./components/columns/Box";

import Link from "next/link";

import { H1, H2 } from "./components/typo/Headers";

import { BiLogoJava } from "react-icons/bi";
import { SiJavascript, SiMysql, SiLaravel, SiFigma, SiHtml5, SiReact, SiNextdotjs, SiPhp } from "react-icons/si";

export default function Home() {

  return (
    <main className="flex flex-col">
      <SectionGrid className="h-screen content-center bg-animation text-gray-900">
        <div className="col-span-12 md:col-span-12 lg:col-span-8 md:col-start-2 lg:col-start-2 px-4 py-3">
          <FadeMotion delay={0.3}>
            <h2 className="text-[3rem] md:text-[3.5rem] font-bold">
              Hi, I am Albert Arques
            </h2>
          </FadeMotion>
          <FadeMotion delay={0.6}>
            <p className="text-[2rem] md:text-[2.5rem]">
              A full stack developer and designer.
            </p>
          </FadeMotion>
          <Box className={" col-span-full  text-gray-900"}>
            <FadeMotion delay={1.5}>
              <div className="flex flex-row px-0 flex-wrap">
                <SiJavascript size={"3rem"} title={"Javascript"} className="icon flex-none w-[3rem] mr-3 md:mr-6 mt-4 " />
                <SiFigma size={"3rem"} title={"Figma"} className="icon flex-none w-[3rem] mr-3 md:mr-6 mt-4" />
                <BiLogoJava size={"3rem"} title={"Java"} className="icon flex-none w-[3rem] mr-3 md:mr-6 mt-4" />
                <SiHtml5 size={"3rem"} title={"HTML5"} className="icon flex-none w-[3rem] mr-3 md:mr-6 mt-4" />
                <SiReact size={"3rem"} title={"React Js"} className="icon flex-none w-[3rem] mr-3 md:mr-6 mt-4" />
                <SiMysql size={"3rem"} title={"MySQL"} className="icon flex-none w-[3rem] mr-3 md:mr-6 mt-4" />
                <SiPhp size={"3rem"} title={"PHP"} className="icon first-letter:flex-none w-[3rem] mr-3 md:mr-6 mt-4" />
                <SiLaravel size={"3rem"} title={"Laravel"} className="icon flex-none w-[3rem] mr-3 md:mr-6 mt-4" />
                <SiNextdotjs size={"3rem"} title={"Next Js"} className="icon flex-none w-[3rem] mr-3 md:mr-6 mt-4" />
              </div>
            </FadeMotion>
          </Box>
        </div>
      </SectionGrid>
      <SectionGrid className={"gap-8 py-[5rem]"}>
        <Box className={"md:col-span-8 md:col-start-2"}>
          <H1>
            Trending works
          </H1>
        </Box>
          <Link href="/" className="contents">
            <Box 
              className={"md:col-span-4 md:col-start-2 mt-2"}>
              <ScrollMotion>
                <img
                  src="https://picsum.photos/1000/1200?random=1"
                  alt="Albert Arques"
                />
                <h2 className="text-[1.4rem] md:text-[1.8rem] font-bold">
                  Title work 1
                </h2>
              </ScrollMotion>
            </Box>
          </Link>
          <Link href="/" className="contents">
            <Box
              className={"md:col-span-5 md:col-start-7 md:mt-[15rem] lg:mt-[30rem]"}>
              <ScrollMotion>
                <img
                  src="https://picsum.photos/1000/1200?random=2"
                  alt="Albert Arques"
                  className="w-fill"
                />
                <h2 className="text-[1.4rem] md:text-[1.8rem] font-bold">
                  Title work 2
                </h2>
              </ScrollMotion>
            </Box>
          </Link>
          <Link href="/" className="contents">
            <Box 
              className={""}>
              <ScrollMotion>
                <img
                  src="https://picsum.photos/1000/800?random=3"
                  alt="Albert Arques"
                  className="w-fill"
                />
                <h2 className="text-[2rem] md:text-[2.5rem] font-bold">
                  Title work 3
                </h2>
              </ScrollMotion>
            </Box>
          </Link>
      </SectionGrid>
    </main>
  );
}

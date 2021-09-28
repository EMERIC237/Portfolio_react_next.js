import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <h2>Hy, I'm EMERIC TOUOLAC</h2>
      </SectionTitle>
      <SectionText>
        <h3>I am a software Developer living in Riverdale, Maryland</h3>
        <div class="div-center">
          <p>
            I use programming and imagination to solve problem and make life
            better. <br />
            Going from learning, linux system administrator to devops, I found
            out my incredible passion for writing actual code.
            <br />
            I'm interested in:
          </p>

          <ol>
            <li>data science</li>
            <li>Mathematics</li>
            <li>personal development</li>
            <li>reading books</li>
          </ol>
          <p>
            With your permission, we can make things better, please
            <a href="#contact">
              <strong>contact me!</strong>
            </a>
          </p>
        </div>
      </SectionText>
      <Button onClick={() => window.location(`bestvemeric@gmail.com`)}></Button>
    </LeftSection>
  </Section>
);

export default Hero;

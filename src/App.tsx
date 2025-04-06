import { Separator } from "./components/Separator/Separator"
import { AboutSection } from "./sections/AboutSection/AboutSection"
import { HeroSection } from "./sections/HeroSection/HeroSection"
import { MissionSection } from "./sections/MissionSection/MissionSection"
import { ObjectiveSection } from "./sections/ObjectiveSection/ObjectiveSection"
import { TransitionSection } from "./sections/TransitionSection/TransitionSection"

const App = () => {
  return (
    <>
      <HeroSection />
      <Separator />
      <AboutSection />
      <Separator />
      <MissionSection />
      <TransitionSection content='Join us as we embark on this journey to revolutionize healthcare and create a healthier future for all' />
      <ObjectiveSection />
    </>
  )
}

export default App

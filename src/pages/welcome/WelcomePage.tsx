import { Card } from '@/components/Card/Card'
import { Container } from '@/components/Container/Container'

export const WelcomePage = () => {
  return (
    <>
      <header className="relative h-full min-h-[195px] w-full bg-[#1D1028] p-16">
        <div className="mx-auto flex w-full max-w-[995px] flex-col items-center px-4">
          <img src="/spaceman_logo.png" />
          <h6 className="mt-[20px]">By Pragmatic</h6>
        </div>
      </header>
      <Container className="my-10">
        <Card>
          <h2>Game Concept</h2>
          <p className="mt-[10px]">
            &quot;Spaceman&quot; by Pragmatic is a groundbreaking space mission
            poised to revolutionize our understanding of Mars. The mission
            represents a collaborative effort between leading scientists,
            engineers, and space agencies worldwide, driven by a collective
            ambition to unlock the mysteries of the Red Planet. Equipped with
            cutting-edge technology and propelled by human ingenuity, Spaceman
            aims to conduct an extensive exploration of Mars, delving deep into
            its terrain, atmosphere, and geological composition.
          </p>
          <p className="mt-4">
            At the heart of Spaceman&apos;s mission is the quest to search for
            signs of past or present life on Mars. The mission&apos;s suite of
            scientific instruments, meticulously designed and calibrated, will
            scour the Martian surface for traces of organic compounds, potential
            biosignatures, and other indicators of habitability. By analyzing
            samples collected from various locations, scientists hope to gain
            invaluable insights into Mars&apos; evolutionary history and the
            possibility of life beyond Earth.
          </p>
          <p className="mt-4">
            Beyond its scientific objectives, Spaceman also aims to pave the way
            for future human exploration of Mars. Through advanced robotics and
            autonomous systems, the mission will conduct crucial reconnaissance
            and resource prospecting, identifying key sites for potential human
            habitats and resource extraction. Moreover, Spaceman will test
            innovative technologies for in-situ resource utilization, such as
            converting Martian regolith into construction materials and
            producing fuel for propulsion, laying the groundwork for sustained
            human presence on the Red Planet.
          </p>
          <p className="mt-4">
            As Spaceman embarks on its journey to Mars, it symbolizes
            humanity&apos;s enduring spirit of exploration and discovery. The
            mission embodies the collective aspirations of countless individuals
            who have dedicated their careers to unraveling the mysteries of the
            cosmos and pushing the boundaries of human knowledge. With each new
            discovery and technological advancement, Spaceman brings us one step
            closer to realizing the dream of interplanetary exploration and
            expanding our understanding of the universe.
          </p>
        </Card>
      </Container>
    </>
  )
}

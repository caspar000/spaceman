import { Card } from '@/components/Card/Card'
import { Container } from '@/components/Container/Container'

export const HomePage = () => {
  return (
    <>
      <header className="relative h-full min-h-[640px] w-full bg-[#1D1028] px-4 py-16">
        <div className="mx-auto flex w-full max-w-[995px] flex-col items-center px-4">
          <img src="/spaceman_logo.png" />
          <h6 className="mt-[20px]">By Pragmatic</h6>
          <h2 className="mx-auto mt-[64px] max-w-[440px] text-center text-[#FFF]">
            Check out Pragmatic&apos;s new Crash game Spaceman.
          </h2>
          <p className="mt-4 max-w-[640px] text-center text-base font-medium leading-[40px] text-[#FFF]/75">
            High RTP(96.5%), up to <span className="font-bold">5000</span>x
            multiplier and the chance to win up to{' '}
            <span className="font-bold">500,000 USD</span>
          </p>
          <div className="absolute flex items-center px-4 sm:top-[395px] sm:max-w-[960px] max-sm:-bottom-8">
            <div className="relative h-full w-full">
              <img src="./home_cover.png" className="w-full" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <button className="button-primary flex items-center gap-4 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"
                      fill="white"
                    />
                  </svg>
                  <span className="font-semibold leading-4 text-white">
                    Play for Real Money
                  </span>
                </button>
                <button className="button-secondary p-4">
                  <span className="font-semibold leading-4 text-white">
                    Play Demo
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Container className="mt-[380px] max-sm:mt-16">
        <Card>
          <p>
            Spaceman, Pragmatic&apos;s brand-new crash game, is finally live!
            This highly anticipated crash game has been a topic of discussion
            among crash & mini-game lovers for quite some time as it is the very
            first crash game by Pragmatic Play. Released on March 24th, 2022,
            Spaceman looks amazingly promising and has a lot to offer.
          </p>
          <p className="mt-4">Keep reading to find out more.</p>
        </Card>
        <Card className="mt-8">
          <h2 className="text-[#1D1028]">Overview</h2>
          <p className="mt-[10px]">
            Thanks to the wonderful Pragmatic Play, you can now freely enjoy
            this brand-new, unique crash game with an impressively high RTP of
            96.5% and numerous extraordinary features. The hype around Spaceman
            is completely justified as players get to go on an adrenaline-filled
            and exciting flight, where longer travels result in higher
            multipliers. With a whopping 5000x multiplier, 50% Cashout feature,
            and a chance to win up to 500,000$, Spaceman really stands out from
            other crash games and proves to be out of the earth.
          </p>
          <p className="mt-4">
            As you can easily guess from the name, the game&apos;s main
            character is a quirky and funny Spaceman who takes you back to your
            childhood dreams by bringing you all the magic associated with space
            and a colorful galaxy. The objective of the game is to help Spaceman
            fly as high as possible to get bigger prizes. As you start playing
            the game, the first thing you see is a cute Spaceman waving at you.
            Spaceman is surrounded by planets, stars, and falling asteroids,
            making this crash game that much more authentic and visually
            pleasing. These fascinating visual effects perfectly correspond with
            the content and amazing sound mixing, creating a relaxing and
            aesthetically attractive gaming atmosphere.
          </p>
          <p className="mt-4">
            Spaceman appeals to those who value good gameplay that has both
            conventional and innovative elements to it. Despite the fact that
            Spaceman is a brand-new title, this real-time, decision-making crash
            game has already managed to gain a great reputation for its amazing
            features and highly engaging potential.
          </p>
          <p>
            Spaceman is now available for all operators that offer Pragmatic
            Play&apos;s live casino games on all devices - mobile and desktop
            versions.
          </p>
        </Card>
        <div className="my-10 flex items-center gap-[40px] max-sm:flex-col">
          <img src="/home_card_1.png" className="w-full" />
          <img src="/home_card_2.png" className="w-full" />
        </div>
        <Card className="mt-8">
          <h2 className="text-[#1D1028]">How Spaceman Game Works</h2>
          <p className="mt-[10px]">
            The game starts with the main character, Spaceman, standing in the
            middle of the panel, getting ready to be launched into the sky. In
            order to start playing, players should pick the base bet from £/€1
            up to £/€100 per round. There are also options for auto-cashout or
            50% auto-cashout from 1.01x to 4,999.99x. As soon as players set
            their bets, the cute interstellar astronaut begins the journey on an
            increasingly steep curve with a probability of crashing at any time.
            Players should attempt to cashout before Spaceman&apos;s
            intergalactic journey come to an inevitable crash. As soon as the
            new round starts, cashout and cashout 50% buttons appear on the
            screen. If a player hits either of these buttons before the crash
            happens, they get a prize.
          </p>
          <p className="mt-4">
            The main question for the game is - exactly how high can the
            Spaceman fly? The answer to this question somewhat depends on a
            player itself, as only they have the right to make a cashout. In
            case a player decides to try their luck and don&apos;t press the
            cashout button just yet, then the question turns into the thrilling
            show, where players are encouraged to shoot for the stars in this
            colorful, crash-inspired quest.
          </p>
          <p className="mt-4">
            Pressing a cashout button makes a player leave the game with their
            prize, while cashout 50% leaves the player for the next round with a
            50% amount of their win. If the Spaceman crushes before the player
            makes cashout, they lose the round. The maximum possible win for
            Spaceman is 500,000$.
          </p>
          <p>
            The longer a player waits to press the cashout button, the higher
            the chances of winning bigger prizes are. There is also a feature of
            auto-cashout, which can be used in case a player doesn&apos;t want
            to press cashout buttons. This can be managed from presets. Your own
            temptation can decide the outcome of the game. For example, once you
            reach an important level of 2000x, it&apos;s getting tricky to
            decide whether to cashout or keep playing. Maybe you are close to
            winning even bigger prizes, or maybe it&apos;s high time you stopped
            and grabbed your winnings.
          </p>
        </Card>
      </Container>
      <section className="my-10 bg-[#FAFAFA] py-10">
        <Container>
          <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1 max-sm:gap-4">
            <Card className="bg-[#FFF]">
              <h2 className="text-[#1D1028]">Key Features</h2>
              <ul className="mt-[10px] list-inside list-disc">
                <li>Multiplayer crash game</li>
                <li>chance to win up to 500,000€</li>
                <li>Engaging Gameplay</li>
                <li>Cashout 50% Feature;</li>
                <li>Multilingual;</li>
                <li>RTP 96.5%</li>
                <li>All Device Compatibility</li>
              </ul>
            </Card>
            <Card className="bg-[#FFF]">
              <h2 className="text-[#1D1028]">Game Concept</h2>
              <ul className="mt-[10px] list-inside list-disc">
                <li>
                  Pragmatic Play is driving differentiation by introducing a
                  brand-new, stunning Crash game with highly interactive
                  features and an engaging, vibrant color scheme.
                </li>
                <li>
                  Unlike other mini-games, Spaceman is based on real-time,
                  decision-making gameplay with no artificial volatility.
                </li>
                <li>
                  Up to a 5000x multiplier and the chance to win up to 500,000$.
                </li>
              </ul>
            </Card>
            <img src="/home_card_3.png" />
            <img src="/home_card_4.png" />
          </div>
          <Card className="mt-10 bg-[#FFF]">
            <h2 className="text-[#1D1028]">Benefits for Players</h2>
            <ul className="mt-[10px] list-inside list-disc">
              <li>Multiplayer crash game</li>
              <li>chance to win up to 500,000€</li>
              <li>Engaging Gameplay</li>
              <li>Cashout 50% Feature;</li>
              <li>Multilingual;</li>
              <li>RTP 96.5%</li>
              <li>All Device Compatibility</li>
            </ul>
          </Card>
        </Container>
      </section>
    </>
  )
}

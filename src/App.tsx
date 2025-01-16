import { Badge, Button, Card, Center, Flex, Grid, Group, Image, MantineProvider, Stack, Text, Title } from '@mantine/core'
import '@mantine/core/styles.css'
import './App.css'
import { FaSlack } from 'react-icons/fa'

function App() {
  return (
    <MantineProvider>
      <Center style={{ height: '20vh' }}>
        <Stack style={{ textAlign: 'center', padding: '1rem' }}>
          <Title className='title'>You ⛵ We ⛵</Title>
          <Text className='subtitle'>"You-Ship-We-Ship"s are events run by Hack Club where you produce something technical (you ship), and you get something neat for it (we ship).</Text>
        </Stack>
      </Center>
      <Center style={{ height: 'fit-content', width: '100vw', padding: '1rem' }}>
        <Stack style={{ width: '100%', padding: '1rem' }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '100%', height: '20em' }}>
        <Card.Section style={{ height: '120%', position: 'relative' }}>
          <Image
            src="https://highseas.hackclub.com/background.svg"
            height={'100%'}
            alt="Norway"
          />
          <Image
            src='https://highseas.hackclub.com/highlogo.svg'
            style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', height: '60%', width: 'auto' }}
          />
          <Group style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Badge color="teal" variant="filled">ACTIVE</Badge>
            <Badge color="yellow" variant="filled">ENDS 31 JAN</Badge>
          </Group>
          <Flex
            style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, 0)' }}
          >
            <Button
          color="#bb99ff"
          size="sm"
          radius="md"
          style={{ border: '0.2em white solid' }}
          onClick={() => window.open('https://highseas.hackclub.com')}
            >Go to High Seas</Button>
            <Button
          color="pink"
          size="sm"
          radius="md"
          ml='sm'
          style={{ border: '0.2em white solid' }}
          onClick={() => window.open('https://hackclub.slack.com/archives/C07PZMBUNDS')}
            ><FaSlack /></Button>
          </Flex>
        </Card.Section>
          </Card>
          <Grid
        breakpoints={{ xs: '500px', sm: '800px', md: '1200px', lg: '1400px', xl: '1600px' }}
          >
        {/* Sprig */}
        <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '100%', height: '20em' }}>
            <Card.Section style={{ height: '120%', position: 'relative' }}>
          <Image
            src="https://sprig.hackclub.com/stories-tiny/orpheus.jpeg"
            height={'100%'}
            alt="Norway"
          />
          <Image
            src='https://sprig.hackclub.com/logo4.png'
            style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', height: '50%', width: 'auto' }}
          />
          <Group style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Badge color="teal" variant="filled">ACTIVE</Badge>
            <Badge color="blue" variant="filled">PERMANENT</Badge>
          </Group>
          <Flex style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, 0)' }}>
          <Button
            style={{ border: '0.2em white solid'}}
            color="orange"
            size="sm"
            radius="md"
            onClick={() => window.open('https://sprig.hackclub.com')}
          >Go to Sprig</Button>
          <Button
          color="pink"
          size="sm"
          radius="md"
          ml='sm'
          style={{ border: '0.2em white solid' }}
          onClick={() => window.open('https://hackclub.slack.com/archives/C02UN35M7LG')}
            ><FaSlack /></Button>
          </Flex>
            </Card.Section>
          </Card>
        </Grid.Col>
        {/* OnBoard */}
        <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '100%', height: '20em' }}>
            <Card.Section style={{ height: '120%', position: 'relative' }}>
          <Image
            src="https://cloud-f4lij7sq1-hack-club-bot.vercel.app/0flowerpcb.png"
            height={'100%'}
            alt="Norway"
          />
          <Image
            src='https://cloud-6skkg6eck-hack-club-bot.vercel.app/0image.png'
            style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', height: '50%', width: 'auto' }}
          />
          <Group style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Badge color="teal" variant="filled">ACTIVE</Badge>
            <Badge color="blue" variant="filled">PERMANENT</Badge>
          </Group>
          <Flex style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, 0)' }}>
          <Button
            style={{ border: '0.2em white solid'}}
            color="green"
            size="sm"
            radius="md"
            onClick={() => window.open('https://onboard.hackclub.com')}
          >Go to OnBoard</Button>
          <Button
          color="pink"
          size="sm"
          radius="md"
          ml='sm'
          style={{ border: '0.2em white solid' }}
          onClick={() => window.open('https://hackclub.slack.com/archives/C056AMWSFKJ')}
            ><FaSlack /></Button>
          </Flex>
            </Card.Section>
          </Card>
        </Grid.Col>
        {/* Boba Drops */}
        <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '100%', height: '20em' }}>
            <Card.Section style={{ height: '120%', position: 'relative' }}>
          <Image
            src="https://boba.hackclub.com/images/boba_card3.png"
            height={'100%'}
            alt="Norway"
          />
          <Image
            src='https://boba.hackclub.com/images/logo.svg'
            style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', height: '50%', width: 'auto' }}
          />
          <Group style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Badge color="teal" variant="filled">ACTIVE</Badge>
            <Badge color="blue" variant="filled">PERMANENT</Badge>
          </Group>
          <Flex style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, 0)' }}>
          <Button
            style={{ border: '0.2em white solid'}}
            color="#ddbd9c"
            size="sm"
            radius="md"
            onClick={() => window.open('https://boba.hackclub.com')}
          >Go to Boba Drops</Button>
          <Button
          color="pink"
          size="sm"
          radius="md"
          ml='sm'
          style={{ border: '0.2em white solid' }}
          onClick={() => window.open('https://hackclub.slack.com/archives/C06UJR8QW0M')}
            ><FaSlack /></Button>
          </Flex>
            </Card.Section>
          </Card>
        </Grid.Col>
        {/* Hackaccino */}
        <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '100%', height: '20em' }}>
            <Card.Section style={{ height: '120%', position: 'relative' }}>
          <Image
            src="https://cloud-3d71c2jaz-hack-club-bot.vercel.app/0screenshot_2025-01-15_114836.png"
            height={'100%'}
            alt="Norway"
          />
          <Image
            src='https://fraps.hackclub.com/logo_with_shadow.svg'
            style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', height: '50%', width: 'auto' }}
          />
          <Group style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Badge color="teal" variant="filled">ACTIVE</Badge>
            <Badge color="blue" variant="filled">PERMANENT</Badge>
          </Group>
          <Flex style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, 0)' }}>
          <Button
            style={{ border: '0.2em white solid'}}
            color="#bbac8b"
            size="sm"
            radius="md"
            onClick={() => window.open('https://fraps.hackclub.com')}
          >Go to Hackaccino</Button>
          </Flex>
            </Card.Section>
          </Card>
        </Grid.Col>
        {/* Cider */}
        <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '100%', height: '20em' }}>
            <Card.Section style={{ height: '120%', position: 'relative' }}>
          <Image
            src="https://cloud-hhizakztr-hack-club-bot.vercel.app/0screenshot_2025-01-15_115239.png"
            height={'100%'}
            alt="Norway"
          />
          <Image
            src='https://cider.hackclub.com/logo.svg'
            style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', height: '30%', width: 'auto' }}
          />
          <Group style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Badge color="teal" variant="filled">ACTIVE</Badge>
            <Badge color="blue" variant="filled">PERMANENT</Badge>
          </Group>
          <Flex style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, 0)' }}>
          <Button
            style={{ border: '0.2em white solid'}}
            color="orange"
            size="sm"
            radius="md"
            onClick={() => window.open('https://cider.hackclub.com')}
          >Go to Cider</Button>
          <Button
          color="pink"
          size="sm"
          radius="md"
          ml='sm'
          style={{ border: '0.2em white solid' }}
          onClick={() => window.open('https://hackclub.slack.com/archives/C073DTGENJ2')}
            ><FaSlack /></Button>
          </Flex>
            </Card.Section>
          </Card>
        </Grid.Col>
        {/* MinusTwelve */}
        <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '100%', height: '20em' }}>
            <Card.Section style={{ height: '120%', position: 'relative' }}>
          <Image
            src="https://cloud-6mdokx65a-hack-club-bot.vercel.app/0screenshot_2025-01-16_115132.png"
            height={'100%'}
            alt="Norway"
          />
          <Image
            src='https://minustwelve.hackclub.com/assets/12-gon.svg'
            style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', height: '23%', width: 'auto' }}
          />
          <Group style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Badge color="teal" variant="filled">ACTIVE</Badge>
            <Badge color="yellow" variant="filled">ENDS 27 JAN</Badge>
          </Group>
          <Flex style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, 0)' }}>
          <Button
            style={{ border: '0.2em white solid'}}
            color="hotpink"
            size="sm"
            radius="md"
            onClick={() => window.open('https://minustwelve.hackclub.com')}
          >Go to MinusTwelve</Button>
          <Button
          color="pink"
          size="sm"
          radius="md"
          ml='sm'
          style={{ border: '0.2em white solid' }}
          onClick={() => window.open('https://hackclub.slack.com/archives/C087S82MNFR')}
            ><FaSlack /></Button>
          </Flex>
            </Card.Section>
          </Card>
        </Grid.Col>
        {/* HackCraft */}
        <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '100%', height: '20em' }}>
            <Card.Section style={{ height: '120%', position: 'relative' }}>
          <Image
            src="https://hackcraft.hackclub.com/images/dirt.png"
            height={'100%'}
            alt="Norway"
          />
          <Image
            src='https://hackcraft.hackclub.com/images/logo.png'
            style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', height: '23%', width: 'auto' }}
          />
          <Group style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Badge color="teal" variant="filled">ACTIVE</Badge>
            <Badge color="yellow" variant="filled">ENDS 31 JAN</Badge>
          </Group>
          <Flex style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, 0)' }}>
          <Button
            style={{ border: '0.2em white solid'}}
            color="green"
            size="sm"
            radius="md"
            onClick={() => window.open('https://hackcraft.hackclub.com')}
          >Go to HackCraft</Button>
          <Button
          color="pink"
          size="sm"
          radius="md"
          ml='sm'
          style={{ border: '0.2em white solid' }}
          onClick={() => window.open('https://hackclub.slack.com/archives/C07NQ5QAYNQ')}
            ><FaSlack /></Button>
          </Flex>
            </Card.Section>
          </Card>
        </Grid.Col>
        {/* RaspAPI */}
        <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '100%', height: '20em' }}>
            <Card.Section style={{ height: '120%', position: 'relative' }}>
          <Image
            src="https://garden.spoonflower.com/c/6849707/p/f/l/zYws6eT3Wsk_k_KMUP0HClfNoGeJnuEQimb6Xtq6T2GwAdEbnO0kPy4W/TechnoRain3.jpg"
            height={'100%'}
            alt="Norway"
          />
          <Image
            src='https://raspapi.hackclub.com/_astro/logo.DGIuK5Sk_1GaOSh.webp'
            style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', height: '40%', width: 'auto' }}
          />
          <Group style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Badge color="teal" variant="filled">ACTIVE</Badge>
            <Badge color="yellow" variant="filled">ENDS 10 MAR</Badge>
          </Group>
          <Flex style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, 0)' }}>
          <Button
            style={{ border: '0.2em white solid'}}
            color="green"
            size="sm"
            radius="md"
            onClick={() => window.open('https://raspapi.hackclub.com')}
          >Go to RaspAPI</Button>
          <Button
          color="pink"
          size="sm"
          radius="md"
          ml='sm'
          style={{ border: '0.2em white solid' }}
          onClick={() => window.open('https://hackclub.slack.com/archives/C02UN35M7LG')}
            ><FaSlack /></Button>
          </Flex>
            </Card.Section>
          </Card>
        </Grid.Col>
        {/* BakeBuild */}
        <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '100%', height: '20em' }}>
            <Card.Section style={{ height: '120%', position: 'relative' }}>
          <Image
            src="https://cloud-ev5bzjoma-hack-club-bot.vercel.app/0screenshot_2025-01-15_115822.png"
            height={'100%'}
            alt="Norway"
          />
          <Image
            src='https://bakebuild.hackclub.com/images/bakebuild-logo.png'
            style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', height: '23%', width: 'auto' }}
          />
          <Group style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Badge color="teal" variant="filled">ACTIVE</Badge>
            <Badge color="yellow" variant="filled">ENDS 2 NOV</Badge>
          </Group>
          <Flex style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, 0)' }}>
          <Button
            style={{ border: '0.2em white solid'}}
            color="#ddbd9c"
            size="sm"
            radius="md"
            onClick={() => window.open('https://bakebuild.hackclub.com')}
          >Go to BakeBuild</Button>
          <Button
          color="pink"
          size="sm"
          radius="md"
          ml='sm'
          style={{ border: '0.2em white solid' }}
          onClick={() => window.open('https://hackclub.slack.com/archives/C0844MV2JM9')}
            ><FaSlack /></Button>
          </Flex>
            </Card.Section>
          </Card>
        </Grid.Col>
        {/* HackPad */}
        <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '100%', height: '20em' }}>
            <Card.Section style={{ height: '120%', position: 'relative' }}>
          <Image
            src="https://hackpad.hackclub.com/bg-light.svg"
            height={'100%'}
            alt="Norway"
          />
          <Image
            src='https://cloud-a62aq1bjq-hack-club-bot.vercel.app/0screenshot_2025-01-16_114605.png'
            style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', height: '20%', width: 'auto' }}
          />
          <Group style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%' }} justify='center'>
            <Badge color="grey" variant="filled">INACTIVE</Badge>
            <Badge color="purple" variant="filled">V2 COMING SOON</Badge>
          </Group>
          <Flex style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, 0)' }}>
          <Button
            style={{ border: '0.2em white solid'}}
            color="green"
            size="sm"
            radius="md"
            onClick={() => window.open('https://hackpad.hackclub.com')}
          >Go to HackPad</Button>
          <Button
          color="pink"
          size="sm"
          radius="md"
          ml='sm'
          style={{ border: '0.2em white solid' }}
          onClick={() => window.open('https://hackclub.slack.com/archives/C07LESGH0B0')}
            ><FaSlack /></Button>
          </Flex>
            </Card.Section>
          </Card>
        </Grid.Col>
          </Grid>
          <Text style={{ textAlign: 'center', fontSize:'0.8em' }}>Logos, Names, and Images copyright of their respective owners.</Text>
          <Text style={{ textAlign: 'center', fontSize:'0.8em' }}>This site is unofficial and may not always be up-to-date.</Text>
        </Stack>
      </Center>
      <a href="https://hackclub.com/">
        <img
          style={{ position: 'absolute', top: 0, left: '10px', border: 0, width: '10em', zIndex: 999 }}
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
          alt="Hack Club"
        />
      </a>
    </MantineProvider>
  )
}

export default App

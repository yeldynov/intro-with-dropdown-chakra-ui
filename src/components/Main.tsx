import React from 'react';
import {
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

import HeroImage from '../assets/image-hero-desktop.png';
import HeroImageMobile from '../assets/image-hero-mobile.png';

import ClientDatabiz from '../assets/client-databiz.svg';
import ClientAudiophile from '../assets/client-audiophile.svg';
import ClientMeet from '../assets/client-meet.svg';
import ClientMaker from '../assets/client-maker.svg';

const clients = [
  { image: ClientDatabiz },
  { image: ClientAudiophile },
  { image: ClientMeet },
  { image: ClientMaker },
];

export default function Main() {
  const imageUrl = useBreakpointValue({
    base: HeroImageMobile,
    sm: HeroImage,
  });

  return (
    <Flex
      gap={10}
      mx={{ base: 0, sm: 200 }}
      height='100%'
      direction={{ base: 'column-reverse', sm: 'row' }}
    >
      <Flex
        direction='column'
        gap={8}
        mx={5}
        mt={{ base: 0, sm: '4rem' }}
        mb={0}
        justify='space-between'
        align='center'
        flex={1}
      >
        <Heading
          as='h1'
          size={{ base: 'xl', sm: '3xl' }}
          alignSelf={{ base: 'center', sm: 'flex-start' }}
        >
          Make remote work
        </Heading>
        <Text
          fontSize='md'
          width={{ base: '100%', sm: '75%' }}
          color='c-medium-gray'
          align={{ base: 'center', sm: 'left' }}
          alignSelf={{ base: 'center', sm: 'flex-start' }}
        >
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </Text>
        <Button
          backgroundColor='c-almost-black'
          color='c-almost-white'
          width={{ base: '50%', sm: '33%' }}
          alignSelf={{ base: 'center', sm: 'flex-start' }}
          rounded='xl'
          _hover={{
            color: 'c-almost-black',
            bg: 'c-almost-white',
            border: '1px solid black',
          }}
        >
          Learn more
        </Button>
        <Stack
          direction={'row'}
          align='center'
          justify='left'
          gap={{ base: 5, sm: 8 }}
          mb={{ base: '50px', sm: 0 }}
          width='100%'
        >
          {clients.map((client) => (
            <Box w={{ base: '60px', sm: '100px' }}>
              <Image src={client.image} />
            </Box>
          ))}
        </Stack>
      </Flex>
      <Box flex={1}>
        <Image src={imageUrl} h={{ base: '100%', sm: '70vh' }} />
      </Box>
    </Flex>
  );
}

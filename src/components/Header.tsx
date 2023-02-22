import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';

import TodoIcon from '../assets/icon-todo.svg';
import CalendarIcon from '../assets/icon-calendar.svg';
import RemindersIcon from '../assets/icon-reminders.svg';
import PlanningIcon from '../assets/icon-planning.svg';
import HamburgerIcon from '../assets/icon-menu.svg';
import CloseIcon from '../assets/icon-close-menu.svg';

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box px={{base: 0, sm: 10}} pt={{base: 0, sm: 5}}>
      <Flex
        bg={useColorModeValue('c-almost-white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'40px'}
        maxH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'between', md: 'start' }}
          align='center'
        >
          <Text className='text-c-almost-black font-bold text-3xl pb-2 desk:pl-3 '>
            snap
          </Text>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              !isOpen ? (
                <Image src={HamburgerIcon} />
              ) : (
                <Image src={CloseIcon} />
              )
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          display={{ base: 'none', md: 'flex' }}
        >
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}
            _hover={{
              color: 'black',
            }}
          >
            Login
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'c-medium-gray'}
            border='1px solid'
            borderColor='c-almost-black'
            href={'#'}
            _hover={{
              color: 'black',
            }}
          >
            Register
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                <Flex gap={1} align='center'>
                  {navItem.label}
                  {navItem.children && (
                    <Icon
                      as={ChevronDownIcon}
                      transition={'all .25s ease-in-out'}
                      w={5}
                      h={5}
                    />
                  )}
                </Flex>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={2}
                rounded={'xl'}
                minW={'150px'}
                maxW={'150px'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, icon }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={1}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Flex gap={2} alignItems='center'>
            <Image src={icon} />
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}
            >
              {label}
            </Text>
          </Flex>
        </Box>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  icon?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Features',
    children: [
      {
        label: 'Todo List',
        icon: TodoIcon,
        href: '#',
      },
      {
        label: 'Calendar',
        icon: CalendarIcon,
        href: '#',
      },
      {
        label: 'Reminders',
        icon: RemindersIcon,
        href: '#',
      },
      {
        label: 'Planning',
        icon: PlanningIcon,
        href: '#',
      },
    ],
  },
  {
    label: 'Company',
    children: [
      {
        label: 'History',
        href: '#',
      },
      {
        label: 'Our Team',
        href: '#',
      },
      {
        label: 'Blog',
        href: '#',
      },
    ],
  },
  {
    label: 'Careers',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
];

import { Link, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faJava,
  faJs,
  faDocker,
  faAws,
  faGithub,
  faLinkedin,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { DEFAULT_SPACING_ICONS, DEFAULT_TEXT_EMPTY } from './constants'

const links = [
  {
    website: 'Github',
    link: 'https://github.com/Tech-S1',
    icon: faGithub,
  },
  {
    website: 'LinkedIn',
    link: 'https://www.linkedin.com/in/zach-sproston-1244a3136/?originalSubdomain=uk',
    icon: faLinkedin,
  },
]

const tech = [
  {
    name: 'Java',
    icon: faJava,
  },
  {
    name: 'JavaScript',
    icon: faJs,
  },
  {
    name: 'Docker/Kubernetes',
    icon: faDocker,
  },
  {
    name: 'AWS',
    icon: faAws,
  },
  {
    name: 'React',
    icon: faReact,
  },
]

const ProfileLink = ({
  website,
  link,
  icon,
}: {
  website: string
  link: string
  icon: IconDefinition
}) => (
  <Text>
    {DEFAULT_SPACING_ICONS}
    <Link href={link} isExternal>
      <FontAwesomeIcon icon={icon} size="lg" width="20px" /> {website}
      <ExternalLinkIcon paddingBottom="3px" />
    </Link>
  </Text>
)

const ProfileTech = ({
  name,
  icon,
}: {
  name: string
  icon: IconDefinition
}) => (
  <Text>
    {DEFAULT_SPACING_ICONS}
    <FontAwesomeIcon icon={icon} size="lg" width="20px" /> {name}
  </Text>
)

const ProfileSection = ({
  icon,
  title,
  mappedValues,
}: {
  icon: string
  title: string
  mappedValues: object[]
}) => (
  <>
    {DEFAULT_TEXT_EMPTY}
    <Text>{`${icon} ${title}:`}</Text>
    {mappedValues}
  </>
)

const TextOutputProfile = () => (
  <>
    <Text>👨🏻‍💻 Zach Sproston - Software Engineer</Text>
    <ProfileSection
      icon="🔗"
      title="Links"
      mappedValues={links.map(ProfileLink)}
    />
    <ProfileSection
      icon="💻"
      title="Technologies"
      mappedValues={tech.map(ProfileTech)}
    />
  </>
)

export default TextOutputProfile

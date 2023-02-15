import { Link, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faJava,
  faJs,
  faDocker,
  faAws,
  faGithub,
  faLinkedinIn,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { DEFAULT_TEXT_EMPTY } from './constants'
import { Icon, IconifyIcon } from '@iconify/react'
import kubernetesIcon from '@iconify/icons-mdi/kubernetes'
import degreeHat from '@iconify/icons-icon-park-twotone/degree-hat'

const links = [
  {
    website: 'Github',
    link: 'https://github.com/Tech-S1',
    icon: faGithub,
  },
  {
    website: 'LinkedIn',
    link: 'https://www.linkedin.com/in/zach-sproston-1244a3136/?originalSubdomain=uk',
    icon: faLinkedinIn,
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
    name: 'Docker',
    icon: faDocker,
  },
  {
    name: 'Kubernetes',
    icon: kubernetesIcon,
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

const certs = [
  {
    name: 'AWS Cloud Practitioner',
    icon: faAws,
  },
  {
    name: 'Kubernetes Administrator (CKA)',
    icon: kubernetesIcon,
  },
]

const education = [
  {
    name: 'Digital and Technology Solutions (Aston University)',
    icon: degreeHat,
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
  <Text ml="8">
    <Link href={link} isExternal>
      <FontAwesomeIcon icon={icon} size="lg" width="20px" /> {website}
      <ExternalLinkIcon paddingBottom="3px" />
    </Link>
  </Text>
)

const ProfileNoLink = ({
  name,
  icon,
}: {
  name: string
  icon: IconDefinition | IconifyIcon
}) => (
  <Text ml="8">
    {'icon' in icon ? (
      <FontAwesomeIcon icon={icon} size="lg" width="20px" />
    ) : (
      <Icon
        icon={icon}
        inline={true}
        style={{ display: 'flex' }}
        width="20px"
      />
    )}{' '}
    {name}
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
      mappedValues={tech.map(ProfileNoLink)}
    />
    <ProfileSection
      icon="📕"
      title="Certifications"
      mappedValues={certs.map(ProfileNoLink)}
    />
    <ProfileSection
      icon="👨‍🏫"
      title="Education"
      mappedValues={education.map(ProfileNoLink)}
    />
  </>
)

export default TextOutputProfile

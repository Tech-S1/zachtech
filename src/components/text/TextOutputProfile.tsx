import { Text } from '@chakra-ui/react'
import {
  faReact,
  faJava,
  faJs,
  faDocker,
  faAws,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import kubernetesIcon from '@iconify/icons-mdi/kubernetes'
import degreeHat from '@iconify/icons-icon-park-twotone/degree-hat'
import { DisplayItem, DisplaySection } from '../DisplayItems'
import {
  faBuilding,
  faGraduationCap,
  faMicroscope,
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

const work = [
  {
    name: 'Capgemini',
    link: 'https://www.capgemini.com/gb-en/',
    icon: faBuilding as IconDefinition,
  },
]
const links = [
  {
    name: 'Github',
    link: 'https://github.com/Tech-S1',
    icon: faGithub as IconDefinition,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/zach-sproston-1244a3136/?originalSubdomain=uk',
    icon: faLinkedinIn as IconDefinition,
  },
  {
    name: 'Credly (Check out my cert badges!)',
    link: 'https://www.credly.com/earner/earned',
    icon: faGraduationCap as IconDefinition,
  },
]

const tech = [
  {
    name: 'Java',
    icon: faJava as IconDefinition,
  },
  {
    name: 'Kubernetes',
    icon: kubernetesIcon,
  },
  {
    name: 'JavaScript',
    icon: faJs as IconDefinition,
  },
  {
    name: 'Docker',
    icon: faDocker as IconDefinition,
  },
  {
    name: 'AWS',
    icon: faAws as IconDefinition,
  },
  {
    name: 'React',
    icon: faReact as IconDefinition,
  },
]

const certs = [
  {
    name: 'ISTQB Certified Tester (Foundation)',
    icon: faMicroscope as IconDefinition,
    link: 'https://www.istqb.org/certifications/certified-tester-foundation-level',
  },
  {
    name: 'ISTQB Certified Tester (Agile)',
    icon: faMicroscope as IconDefinition,
    link: 'https://www.istqb.org/certifications/agile-tester',
  },
  {
    name: 'ASTQB Certified Tester (Mobile)',
    icon: faMicroscope as IconDefinition,
    link: 'https://astqb.org/certifications/mobile-tester-certification',
  },
  {
    name: 'AWS Cloud Practitioner',
    icon: faAws as IconDefinition,
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner',
  },
  {
    name: 'Kubernetes Administrator (CKA)',
    icon: kubernetesIcon,
    link: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka',
  },
  {
    name: 'Kubernetes Application Developer (CKAD)',
    icon: kubernetesIcon,
    link: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/',
  },
]

const education = [
  {
    name: 'Digital and Technology Solutions (Aston University)',
    icon: degreeHat,
    link: 'https://www.aston.ac.uk/study/courses/digital-and-technology-solutions-bsc-degree-apprenticeship',
  },
]

const TextOutputProfile = () => (
  <>
    <Text>👨🏻‍💻 Zach Sproston - Software Engineer</Text>
    <DisplaySection
      icon="📁"
      title="Work"
      mappedValues={work.map(DisplayItem)}
    />
    <DisplaySection
      icon="🔗"
      title="Links"
      mappedValues={links.map(DisplayItem)}
    />
    <DisplaySection
      icon="💻"
      title="Technologies"
      mappedValues={tech.map(DisplayItem)}
    />
    <DisplaySection
      icon="📕"
      title="Certifications"
      mappedValues={certs.map(DisplayItem)}
    />
    <DisplaySection
      icon="👨‍🏫"
      title="Education"
      mappedValues={education.map(DisplayItem)}
    />
  </>
)

export default TextOutputProfile

import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link, Text } from '@chakra-ui/react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon, IconifyIcon } from '@iconify/react'

const LinkWrapper = ({
  link,
  children,
}: {
  link: string | undefined | null
  children: string | JSX.Element | JSX.Element[]
}) => (
  <>
    {link ? (
      <Link href={link} isExternal>
        {children}
        <ExternalLinkIcon paddingBottom="3px" />
      </Link>
    ) : (
      children
    )}
  </>
)

const DisplayItem = ({
  name,
  icon,
  link,
  description,
}: {
  link?: string | undefined | null
  name: string
  description?: string
  icon: IconDefinition | IconifyIcon
}) => (
  <Text ml="8" style={{ display: 'flex' }}>
    {'icon' in icon ? (
      <FontAwesomeIcon icon={icon} size="lg" width="20px" />
    ) : (
      <Icon icon={icon} inline={true} width="20px" />
    )}
    <Text pl="2">
      <LinkWrapper link={link}>
        {name + (description ? ` - ${description}` : '')}
      </LinkWrapper>
    </Text>
  </Text>
)

const DisplaySection = ({
  icon,
  title,
  mappedValues,
}: {
  icon: string
  title: string
  mappedValues: object[]
}) => (
  <>
    <Text> </Text>
    <Text>{`${icon} ${title}:`}</Text>
    {mappedValues}
  </>
)

export { DisplayItem, DisplaySection }

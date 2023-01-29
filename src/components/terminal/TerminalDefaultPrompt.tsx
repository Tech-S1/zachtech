import { Mark } from '@chakra-ui/react'
import { DOMAIN_NAME } from '../../app/constants'

const PromptBody = ({ location }: { location: string }) => (
  <>
    <Mark color="whiteAlpha.800">{'in '}</Mark>
    <Mark color="pink.300">{`~/${location} `}</Mark>
    <Mark color="whiteAlpha.800">{'on '}</Mark>
    <Mark color="green.400">{DOMAIN_NAME}</Mark>
  </>
)

const PromptPointer = () => (
  <Mark fontWeight="bold" color="purple.500">
    {' -> '}
  </Mark>
)

const PromptInput = ({
  children,
}: {
  children: string | JSX.Element | JSX.Element[]
}) => (
  <>
    <PromptPointer />
    {children}
  </>
)

export { PromptBody, PromptPointer, PromptInput }

import { Show } from '@chakra-ui/react'
import { DEFAULT_MOBILE_SIZE } from '../app/constants'

const SizeWrapper = ({
  small,
  large,
}: {
  small: string | JSX.Element | JSX.Element[]
  large: string | JSX.Element | JSX.Element[]
}) => (
  <>
    <Show above={DEFAULT_MOBILE_SIZE}>{large}</Show>
    <Show below={DEFAULT_MOBILE_SIZE}>{small}</Show>
  </>
)

export default SizeWrapper

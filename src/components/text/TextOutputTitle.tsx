import { Text } from '@chakra-ui/react'
import SizeWrapper from '../../layouts/SizeWrapper'
import { DEFAULT_TEXT_EMPTY } from './constants'

const TerminalTitleText = () => (
  <>
    <SizeWrapper
      small={
        <>
          <Text color="pink.300" fontWeight="bold">
            {'___            ___         '}
          </Text>
          <Text color="pink.300" fontWeight="bold">
            {' _/ _  _ |_     |  _  _ |_ '}
          </Text>
          <Text color="pink.300" fontWeight="bold">
            {'/__(_|(_ | |    | (/_(_ | |'}
          </Text>
        </>
      }
      large={
        <>
          <Text color="pink.300" fontWeight="bold">
            {' _______                _         _____              _     '}
          </Text>
          <Text color="pink.300" fontWeight="bold">
            {'(_____  )              ( )       (_   _)            ( )    '}
          </Text>
          <Text color="pink.300" fontWeight="bold">
            {"     /'/'   _ _    ___ | |__       | |   __     ___ | |__  "}
          </Text>
          <Text color="pink.300" fontWeight="bold">
            {"   /'/'   /'_` ) /'___)|  _ `\\     | | /'__`\\ /'___)|  _ `\\"}
          </Text>
          <Text color="pink.300" fontWeight="bold">
            {" /'/'___ ( (_| |( (___ | | | |     | |(  ___/( (___ | | | |"}
          </Text>
          <Text color="pink.300" fontWeight="bold">
            {'(_______)`\\__,_)`\\____)(_) (_)     (_)`\\____)`\\____)(_) (_)'}
          </Text>
        </>
      }
    />
    {DEFAULT_TEXT_EMPTY}
  </>
)

export default TerminalTitleText

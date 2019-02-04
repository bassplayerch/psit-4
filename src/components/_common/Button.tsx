import styled from 'styled-components'
import { color, ColorProps, ResponsiveValue, SpaceProps, space } from 'styled-system'
import { ColorTheme, SpaceTheme } from '../../theme/theme';


const Button = styled.button<ColorTheme & SpaceTheme>`
  ${color}
  ${space}
`

export default Button
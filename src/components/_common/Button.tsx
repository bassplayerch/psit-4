import styled from 'styled-components'
import { color, ColorProps, ResponsiveValue, SpaceProps, space } from 'styled-system'
import { ColorTheme } from '../../theme/theme';


const Button = styled.button<ColorTheme & SpaceProps>`
  ${color}
  ${space}
`

export default Button
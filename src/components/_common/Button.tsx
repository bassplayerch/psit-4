import styled from 'styled-components';
import { color, ColorProps, ResponsiveValue, space } from 'styled-system';
import { ColorTheme, SpaceTheme as SpacingTheme } from '../../theme/theme';

const Button = styled.button<ColorTheme & SpacingTheme>`
  ${color}
  ${space}
`;

export default Button;

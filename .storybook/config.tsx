import { addDecorator, configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import { themes } from "@storybook/components";
import { ThemeProvider } from "styled-components";
import { theme } from '../src/theme/theme';
import React from 'react';

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}


addDecorator((story) => (
  // @ts-ignore
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
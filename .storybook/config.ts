import { addDecorator, configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import { themes } from "@storybook/components";

// automatically import all files ending in *.stories.tsx
const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
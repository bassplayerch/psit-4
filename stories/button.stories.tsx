import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../src/components/_common/Button';

const stories = storiesOf('Components', module);

stories.add('Button', withInfo({ inline: true })(() => <Button color={'secondary'}>hallo</Button>));

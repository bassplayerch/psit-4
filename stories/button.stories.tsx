import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { number } from 'prop-types';

const stories = storiesOf('Components', module);

stories.add('Button', withInfo({ inline: true })(() => <Button title={'asda'} number={4} />));
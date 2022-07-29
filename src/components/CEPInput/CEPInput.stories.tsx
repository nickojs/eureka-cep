import { Story, Meta } from '@storybook/react';
import CEPInput from './CEPInput';

export default {
  component: CEPInput,
  title: 'Components/CEPInput'
} as Meta;

const CEPInputStory: Story<any> = (args) => <CEPInput {...args} />;

export const CEPInputDefault = CEPInputStory.bind({});
CEPInputDefault.args = { };

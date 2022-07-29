import { Story, Meta } from '@storybook/react';
import InputContainer from './InputContainer';

export default {
  component: InputContainer,
  title: 'Containers/CEP'
} as Meta;

const InputContainerStory: Story<any> = (args) => <InputContainer {...args} />;

export const InputContainerDefault = InputContainerStory.bind({});
InputContainerDefault.args = { };

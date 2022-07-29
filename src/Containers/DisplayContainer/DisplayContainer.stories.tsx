import { Story, Meta } from '@storybook/react';
import { AddressProvider } from '../../context/AddressContext';
import DisplayContainer from './DisplayContainer';
import InputContainer from '../InputContainer/InputContainer';

export default {
  component: DisplayContainer,
  title: 'Containers/CEP'
} as Meta;

const DisplayContainerStory: Story<any> = (args) => (
  <DisplayContainer {...args} />
);

export const DisplayContainerDefault = DisplayContainerStory.bind({});
DisplayContainerDefault.args = { };

DisplayContainerDefault.decorators = [
  (Component) => (
    <AddressProvider>
      <InputContainer />
      <Component />
    </AddressProvider>
  )
];

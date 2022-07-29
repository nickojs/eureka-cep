import { Story, Meta } from '@storybook/react';
import DisplayAddress from './DisplayAddress';
import mockAddress from '../../../mocks/address';
import mockMap from '../../../mocks/image';

export default {
  component: DisplayAddress,
  title: 'Components/DisplayAddress'
} as Meta;

const DisplayAddressStory: Story<any> = (args) => <DisplayAddress {...args} />;

export const WithMap = DisplayAddressStory.bind({});
WithMap.args = {
  data: mockAddress,
  map: mockMap
};

export const WithoutMap = DisplayAddressStory.bind({});
WithoutMap.args = {
  data: mockAddress,
  map: ''
};

import { Story, Meta } from '@storybook/react';
import DisplayAddress from './DisplayAddress';
import mockAddress from '../../../mocks/address';

export default {
  component: DisplayAddress,
  title: 'Display Address'
} as Meta;

const DisplayAddressStory: Story<any> = (args) => <DisplayAddress {...args} />;

export const DisplayAddressDefault = DisplayAddressStory.bind({});
DisplayAddressDefault.args = { ...mockAddress };

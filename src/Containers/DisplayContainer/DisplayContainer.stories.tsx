import { useEffect } from 'react';
import { Story, Meta } from '@storybook/react';
import useAddress, { AddressProvider } from '../../context/AddressContext';
import DisplayContainer from './DisplayContainer';
import mockAddress from '../../../mocks/address';
import { ViaCepResponse } from '../../interfaces';

export default {
  component: DisplayContainer,
  title: 'Containers/CEP'
} as Meta;

const InjectStoryData = ({ data }: { data: Record<string, string> }) => {
  const { setData } = useAddress();

  // Since I'm just injecting *known data* into the context,
  // I won't bother to create an actual type "parser"
  useEffect(() => {
    setData(data as unknown as ViaCepResponse);
  }, [data]);

  return <p> Data was injected into this Story </p>;
};

const DisplayContainerStory: Story<any> = (args) => <DisplayContainer {...args} />;

export const DisplayContainerDefault = DisplayContainerStory.bind({});
DisplayContainerDefault.args = { };

DisplayContainerDefault.decorators = [
  (Component) => (
    <AddressProvider>
      <InjectStoryData data={mockAddress} />
      <Component />
    </AddressProvider>
  )
];

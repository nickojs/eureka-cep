import { Story, Meta } from '@storybook/react';
import ErrorCard from './ErrorCard';

export default {
  component: ErrorCard,
  title: 'Components/Error Card'
} as Meta;

const ErrorCardStory: Story<any> = (args) => (
  <ErrorCard {...args} />
);

export const ErrorCardDefault = ErrorCardStory.bind({});
ErrorCardDefault.args = {
  msg: 'Não foi possível acessar esse CEP'
};

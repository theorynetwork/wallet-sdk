import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TransactionsComponent } from './transactions.component';

export default {
  title: 'TransactionsComponent',
  component: TransactionsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TransactionsComponent>;

const Template: Story<TransactionsComponent> = (args: TransactionsComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
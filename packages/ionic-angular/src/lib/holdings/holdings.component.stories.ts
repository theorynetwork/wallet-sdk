import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HoldingsComponent } from './holdings.component';

export default {
  title: 'HoldingsComponent',
  component: HoldingsComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<HoldingsComponent>;

const Template: Story<HoldingsComponent> = (args: HoldingsComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
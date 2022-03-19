import { IonicModule } from '@ionic/angular';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HoldingsComponent } from './holdings.component';

export default {
  title: 'HoldingsComponent',
  component: HoldingsComponent,
  decorators: [
    moduleMetadata({
      imports: [IonicModule.forRoot()],
    })
  ],
} as Meta<HoldingsComponent>;

const Template: Story<HoldingsComponent> = (args: HoldingsComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}

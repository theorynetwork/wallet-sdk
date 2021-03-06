import { IonicModule } from '@ionic/angular';
import { NgxsModule } from '@ngxs/store';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { PublicServers, StateXrplAccount, StateXrplSettings } from '@theory/xrpl';

import { HoldingsComponent } from './holdings.component';

export default {
  title: 'HoldingsComponent',
  component: HoldingsComponent,
  decorators: [
    moduleMetadata({
      imports: [

        IonicModule.forRoot(),
        NgxsModule.forRoot(
          [
            StateXrplSettings,
            StateXrplAccount
          ],
          { developmentMode: true })
      ],
    })
  ],
} as Meta<HoldingsComponent>;

const Template: Story<HoldingsComponent> = (args: HoldingsComponent) => ({
  props: args,
});


export const Primary: Story<HoldingsComponent> = Template.bind({});
Primary.args = {
  server: PublicServers.TestnetRipple
};

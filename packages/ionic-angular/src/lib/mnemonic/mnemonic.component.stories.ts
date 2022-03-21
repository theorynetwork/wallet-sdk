import { IonicModule } from '@ionic/angular';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MnemonicComponent } from './mnemonic.component';

export default {
  title: 'MnemonicComponent',
  component: MnemonicComponent,
  decorators: [
    moduleMetadata({
      imports: [IonicModule.forRoot()],
    })
  ],
} as Meta<MnemonicComponent>;

const Template: Story<MnemonicComponent> = (args: MnemonicComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}

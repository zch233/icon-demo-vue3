// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import BankTwoToneSvg from '@ant-design/icons-svg/lib/asn/BankTwoTone';

export interface BankTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BankTwoTone: BankTwoToneIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={BankTwoToneSvg} />
    ;

BankTwoTone.displayName = 'BankTwoTone';

export default BankTwoTone;
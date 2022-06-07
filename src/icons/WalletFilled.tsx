// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import WalletFilledSvg from '@ant-design/icons-svg/lib/asn/WalletFilled';

export interface WalletFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const WalletFilled: WalletFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={WalletFilledSvg} />
    ;

WalletFilled.displayName = 'WalletFilled';

export default FunctionalComponent;
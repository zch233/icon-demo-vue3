// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import WalletFilledSvg from '@ant-design/icons-svg/lib/asn/WalletFilled';

export interface WalletFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const WalletFilled: WalletFilledIconType = (props, context) => <Icon name='WalletFilled' {...{ ...props, ...context.attrs }} icon={WalletFilledSvg} />;

WalletFilled.displayName = 'WalletFilled';

export default WalletFilled;
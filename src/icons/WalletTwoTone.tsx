// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import WalletTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletTwoTone';

export interface WalletTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const WalletTwoTone: WalletTwoToneIconType = (props, context) => <Icon name='WalletTwoTone' {...{ ...props, ...context.attrs }} icon={WalletTwoToneSvg} />;

WalletTwoTone.displayName = 'WalletTwoTone';

export default WalletTwoTone;
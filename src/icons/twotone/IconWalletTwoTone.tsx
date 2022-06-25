// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WalletTwoToneSvg from 'icon-base/es/asn/WalletTwoTone';

export interface WalletTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWalletTwoTone: WalletTwoToneIconType = (props, context) => <Icon name='WalletTwoTone' {...{ ...props, ...context.attrs }} icon={WalletTwoToneSvg} />;

IconWalletTwoTone.displayName = 'IconWalletTwoTone';
IconWalletTwoTone.theme = 'twotone';
IconWalletTwoTone.originName = 'wallet';

export default IconWalletTwoTone;

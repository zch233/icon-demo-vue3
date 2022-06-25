// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShopTwoToneSvg from 'icon-base/es/asn/ShopTwoTone';

export interface ShopTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconShopTwoTone: ShopTwoToneIconType = (props, context) => <Icon name='ShopTwoTone' {...{ ...props, ...context.attrs }} icon={ShopTwoToneSvg} />;

IconShopTwoTone.displayName = 'IconShopTwoTone';
IconShopTwoTone.theme = 'twotone';
IconShopTwoTone.originName = 'shop';

export default IconShopTwoTone;

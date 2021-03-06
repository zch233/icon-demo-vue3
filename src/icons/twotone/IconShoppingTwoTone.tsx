// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShoppingTwoToneSvg from 'icon-base/es/asn/ShoppingTwoTone';

export interface ShoppingTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconShoppingTwoTone: ShoppingTwoToneIconType = (props, context) => (
    <Icon name='ShoppingTwoTone' {...{ ...props, ...context.attrs }} icon={ShoppingTwoToneSvg} />
);

IconShoppingTwoTone.displayName = 'IconShoppingTwoTone';
IconShoppingTwoTone.theme = 'twotone';
IconShoppingTwoTone.originName = 'shopping';

export default IconShoppingTwoTone;

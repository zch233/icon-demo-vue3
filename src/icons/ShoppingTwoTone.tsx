// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ShoppingTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShoppingTwoTone';

export interface ShoppingTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ShoppingTwoTone: ShoppingTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ShoppingTwoToneSvg} />;

ShoppingTwoTone.displayName = 'ShoppingTwoTone';

export default FunctionalComponent;
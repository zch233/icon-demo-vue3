// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ShoppingFilledSvg from '@ant-design/icons-svg/lib/asn/ShoppingFilled';

export interface ShoppingFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ShoppingFilled: ShoppingFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ShoppingFilledSvg} />;

ShoppingFilled.displayName = 'ShoppingFilled';

export default ShoppingFilled;
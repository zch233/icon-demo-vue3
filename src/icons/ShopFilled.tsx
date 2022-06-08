// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ShopFilledSvg from '@ant-design/icons-svg/lib/asn/ShopFilled';

export interface ShopFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ShopFilled: ShopFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ShopFilledSvg} />;

ShopFilled.displayName = 'ShopFilled';

export default ShopFilled;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import GiftFilledSvg from '@ant-design/icons-svg/lib/asn/GiftFilled';

export interface GiftFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const GiftFilled: GiftFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={GiftFilledSvg} />;

GiftFilled.displayName = 'GiftFilled';

export default FunctionalComponent;
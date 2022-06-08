// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import GoldFilledSvg from '@ant-design/icons-svg/lib/asn/GoldFilled';

export interface GoldFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const GoldFilled: GoldFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={GoldFilledSvg} />;

GoldFilled.displayName = 'GoldFilled';

export default FunctionalComponent;
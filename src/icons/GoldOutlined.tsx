// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import GoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoldOutlined';

export interface GoldOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const GoldOutlined: GoldOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={GoldOutlinedSvg} />;

GoldOutlined.displayName = 'GoldOutlined';

export default GoldOutlined;
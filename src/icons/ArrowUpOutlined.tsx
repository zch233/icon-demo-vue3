// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ArrowUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowUpOutlined';

export interface ArrowUpOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ArrowUpOutlined: ArrowUpOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ArrowUpOutlinedSvg} />;

ArrowUpOutlined.displayName = 'ArrowUpOutlined';

export default ArrowUpOutlined;
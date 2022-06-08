// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ForkOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForkOutlined';

export interface ForkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ForkOutlined: ForkOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ForkOutlinedSvg} />;

ForkOutlined.displayName = 'ForkOutlined';

export default ForkOutlined;
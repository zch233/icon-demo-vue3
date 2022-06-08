// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SwapOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapOutlined';

export interface SwapOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SwapOutlined: SwapOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SwapOutlinedSvg} />;

SwapOutlined.displayName = 'SwapOutlined';

export default SwapOutlined;
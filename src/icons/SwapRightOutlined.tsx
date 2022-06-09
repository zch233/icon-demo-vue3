// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SwapRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapRightOutlined';

export interface SwapRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SwapRightOutlined: SwapRightOutlinedIconType = (props, context) => <Icon name='SwapRightOutlined' {...{ ...props, ...context.attrs }} icon={SwapRightOutlinedSvg} />;

SwapRightOutlined.displayName = 'SwapRightOutlined';

export default SwapRightOutlined;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SwapLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapLeftOutlined';

export interface SwapLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SwapLeftOutlined: SwapLeftOutlinedIconType = (props, context) => <Icon name='SwapLeftOutlined' {...{ ...props, ...context.attrs }} icon={SwapLeftOutlinedSvg} />;

SwapLeftOutlined.displayName = 'SwapLeftOutlined';

export default SwapLeftOutlined;
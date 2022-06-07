// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SwapLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapLeftOutlined';

export interface SwapLeftOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SwapLeftOutlined: SwapLeftOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SwapLeftOutlinedSvg} />
    ;

SwapLeftOutlined.displayName = 'SwapLeftOutlined';

export default FunctionalComponent;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SlidersOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlidersOutlined';

export interface SlidersOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SlidersOutlined: SlidersOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SlidersOutlinedSvg} />
    ;

SlidersOutlined.displayName = 'SlidersOutlined';

export default FunctionalComponent;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SlidersFilledSvg from '@ant-design/icons-svg/lib/asn/SlidersFilled';

export interface SlidersFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SlidersFilled: SlidersFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SlidersFilledSvg} />
    ;

SlidersFilled.displayName = 'SlidersFilled';

export default FunctionalComponent;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SlidersTwoToneSvg from '@ant-design/icons-svg/lib/asn/SlidersTwoTone';

export interface SlidersTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SlidersTwoTone: SlidersTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SlidersTwoToneSvg} />
    ;

SlidersTwoTone.displayName = 'SlidersTwoTone';

export default FunctionalComponent;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import HourglassTwoToneSvg from '@ant-design/icons-svg/lib/asn/HourglassTwoTone';

export interface HourglassTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const HourglassTwoTone: HourglassTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={HourglassTwoToneSvg} />
    ;

HourglassTwoTone.displayName = 'HourglassTwoTone';

export default FunctionalComponent;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ScheduleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScheduleTwoTone';

export interface ScheduleTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ScheduleTwoTone: ScheduleTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ScheduleTwoToneSvg} />
    ;

ScheduleTwoTone.displayName = 'ScheduleTwoTone';

export default FunctionalComponent;
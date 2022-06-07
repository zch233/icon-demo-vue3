// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import HddTwoToneSvg from '@ant-design/icons-svg/lib/asn/HddTwoTone';

export interface HddTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const HddTwoTone: HddTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={HddTwoToneSvg} />
    ;

HddTwoTone.displayName = 'HddTwoTone';

export default FunctionalComponent;
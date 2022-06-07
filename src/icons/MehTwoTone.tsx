// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MehTwoToneSvg from '@ant-design/icons-svg/lib/asn/MehTwoTone';

export interface MehTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MehTwoTone: MehTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MehTwoToneSvg} />
    ;

MehTwoTone.displayName = 'MehTwoTone';

export default FunctionalComponent;
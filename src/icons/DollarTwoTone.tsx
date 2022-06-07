// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DollarTwoToneSvg from '@ant-design/icons-svg/lib/asn/DollarTwoTone';

export interface DollarTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DollarTwoTone: DollarTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DollarTwoToneSvg} />
    ;

DollarTwoTone.displayName = 'DollarTwoTone';

export default FunctionalComponent;
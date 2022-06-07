// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import EnvironmentTwoToneSvg from '@ant-design/icons-svg/lib/asn/EnvironmentTwoTone';

export interface EnvironmentTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const EnvironmentTwoTone: EnvironmentTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={EnvironmentTwoToneSvg} />
    ;

EnvironmentTwoTone.displayName = 'EnvironmentTwoTone';

export default FunctionalComponent;
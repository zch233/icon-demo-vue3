// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import StopTwoToneSvg from '@ant-design/icons-svg/lib/asn/StopTwoTone';

export interface StopTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const StopTwoTone: StopTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={StopTwoToneSvg} />
    ;

StopTwoTone.displayName = 'StopTwoTone';

export default FunctionalComponent;
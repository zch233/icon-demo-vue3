// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FastBackwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/FastBackwardOutlined';

export interface FastBackwardOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FastBackwardOutlined: FastBackwardOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FastBackwardOutlinedSvg} />
    ;

FastBackwardOutlined.displayName = 'FastBackwardOutlined';

export default FunctionalComponent;
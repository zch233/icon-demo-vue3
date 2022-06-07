// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FastForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/FastForwardOutlined';

export interface FastForwardOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FastForwardOutlined: FastForwardOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FastForwardOutlinedSvg} />
    ;

FastForwardOutlined.displayName = 'FastForwardOutlined';

export default FunctionalComponent;
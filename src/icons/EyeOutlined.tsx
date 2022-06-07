// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import EyeOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeOutlined';

export interface EyeOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const EyeOutlined: EyeOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={EyeOutlinedSvg} />
    ;

EyeOutlined.displayName = 'EyeOutlined';

export default FunctionalComponent;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import EyeInvisibleOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined';

export interface EyeInvisibleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const EyeInvisibleOutlined: EyeInvisibleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={EyeInvisibleOutlinedSvg} />
    ;

EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined';

export default FunctionalComponent;
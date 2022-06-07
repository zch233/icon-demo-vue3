// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SkinOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkinOutlined';

export interface SkinOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SkinOutlined: SkinOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SkinOutlinedSvg} />
    ;

SkinOutlined.displayName = 'SkinOutlined';

export default FunctionalComponent;
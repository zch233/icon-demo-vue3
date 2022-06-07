// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BorderVerticleOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderVerticleOutlined';

export interface BorderVerticleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BorderVerticleOutlined: BorderVerticleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BorderVerticleOutlinedSvg} />
    ;

BorderVerticleOutlined.displayName = 'BorderVerticleOutlined';

export default FunctionalComponent;
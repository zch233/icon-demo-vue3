// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ScissorOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScissorOutlined';

export interface ScissorOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ScissorOutlined: ScissorOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ScissorOutlinedSvg} />
    ;

ScissorOutlined.displayName = 'ScissorOutlined';

export default FunctionalComponent;
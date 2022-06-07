// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ToolOutlinedSvg from '@ant-design/icons-svg/lib/asn/ToolOutlined';

export interface ToolOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ToolOutlined: ToolOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ToolOutlinedSvg} />
    ;

ToolOutlined.displayName = 'ToolOutlined';

export default FunctionalComponent;
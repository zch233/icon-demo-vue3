// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ToolFilledSvg from '@ant-design/icons-svg/lib/asn/ToolFilled';

export interface ToolFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ToolFilled: ToolFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ToolFilledSvg} />
    ;

ToolFilled.displayName = 'ToolFilled';

export default FunctionalComponent;
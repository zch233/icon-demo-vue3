// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FunctionOutlinedSvg from '@ant-design/icons-svg/lib/asn/FunctionOutlined';

export interface FunctionOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FunctionOutlined: FunctionOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FunctionOutlinedSvg} />
    ;

FunctionOutlined.displayName = 'FunctionOutlined';

export default FunctionalComponent;
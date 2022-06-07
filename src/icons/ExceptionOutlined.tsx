// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ExceptionOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExceptionOutlined';

export interface ExceptionOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ExceptionOutlined: ExceptionOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ExceptionOutlinedSvg} />
    ;

ExceptionOutlined.displayName = 'ExceptionOutlined';

export default FunctionalComponent;
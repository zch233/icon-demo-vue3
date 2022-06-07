// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import WarningOutlinedSvg from '@ant-design/icons-svg/lib/asn/WarningOutlined';

export interface WarningOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const WarningOutlined: WarningOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={WarningOutlinedSvg} />
    ;

WarningOutlined.displayName = 'WarningOutlined';

export default FunctionalComponent;
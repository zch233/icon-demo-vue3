// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ExpandOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExpandOutlined';

export interface ExpandOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ExpandOutlined: ExpandOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ExpandOutlinedSvg} />
    ;

ExpandOutlined.displayName = 'ExpandOutlined';

export default FunctionalComponent;
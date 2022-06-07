// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ExpandAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExpandAltOutlined';

export interface ExpandAltOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ExpandAltOutlined: ExpandAltOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ExpandAltOutlinedSvg} />
    ;

ExpandAltOutlined.displayName = 'ExpandAltOutlined';

export default FunctionalComponent;
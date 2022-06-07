// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DribbbleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DribbbleOutlined';

export interface DribbbleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DribbbleOutlined: DribbbleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DribbbleOutlinedSvg} />
    ;

DribbbleOutlined.displayName = 'DribbbleOutlined';

export default FunctionalComponent;
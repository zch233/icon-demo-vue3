// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import MediumWorkmarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumWorkmarkOutlined';

export interface MediumWorkmarkOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const MediumWorkmarkOutlined: MediumWorkmarkOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={MediumWorkmarkOutlinedSvg} />
    ;

MediumWorkmarkOutlined.displayName = 'MediumWorkmarkOutlined';

export default FunctionalComponent;
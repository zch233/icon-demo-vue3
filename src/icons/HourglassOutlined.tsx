// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import HourglassOutlinedSvg from '@ant-design/icons-svg/lib/asn/HourglassOutlined';

export interface HourglassOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const HourglassOutlined: HourglassOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={HourglassOutlinedSvg} />
    ;

HourglassOutlined.displayName = 'HourglassOutlined';

export default FunctionalComponent;
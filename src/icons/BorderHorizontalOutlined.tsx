// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BorderHorizontalOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderHorizontalOutlined';

export interface BorderHorizontalOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BorderHorizontalOutlined: BorderHorizontalOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BorderHorizontalOutlinedSvg} />
    ;

BorderHorizontalOutlined.displayName = 'BorderHorizontalOutlined';

export default FunctionalComponent;
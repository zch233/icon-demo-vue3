// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BorderLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderLeftOutlined';

export interface BorderLeftOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BorderLeftOutlined: BorderLeftOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BorderLeftOutlinedSvg} />
    ;

BorderLeftOutlined.displayName = 'BorderLeftOutlined';

export default FunctionalComponent;
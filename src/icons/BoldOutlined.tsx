// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoldOutlined';

export interface BoldOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BoldOutlined: BoldOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BoldOutlinedSvg} />
    ;

BoldOutlined.displayName = 'BoldOutlined';

export default FunctionalComponent;
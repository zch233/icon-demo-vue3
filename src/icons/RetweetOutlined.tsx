// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RetweetOutlinedSvg from '@ant-design/icons-svg/lib/asn/RetweetOutlined';

export interface RetweetOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RetweetOutlined: RetweetOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RetweetOutlinedSvg} />
    ;

RetweetOutlined.displayName = 'RetweetOutlined';

export default FunctionalComponent;
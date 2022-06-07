// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import RadiusBottomleftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusBottomleftOutlined';

export interface RadiusBottomleftOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const RadiusBottomleftOutlined: RadiusBottomleftOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={RadiusBottomleftOutlinedSvg} />
    ;

RadiusBottomleftOutlined.displayName = 'RadiusBottomleftOutlined';

export default FunctionalComponent;
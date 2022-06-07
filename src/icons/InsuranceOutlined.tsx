// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import InsuranceOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsuranceOutlined';

export interface InsuranceOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const InsuranceOutlined: InsuranceOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={InsuranceOutlinedSvg} />
    ;

InsuranceOutlined.displayName = 'InsuranceOutlined';

export default FunctionalComponent;
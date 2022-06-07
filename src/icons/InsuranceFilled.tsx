// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import InsuranceFilledSvg from '@ant-design/icons-svg/lib/asn/InsuranceFilled';

export interface InsuranceFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const InsuranceFilled: InsuranceFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={InsuranceFilledSvg} />
    ;

InsuranceFilled.displayName = 'InsuranceFilled';

export default FunctionalComponent;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import BankOutlinedSvg from '@ant-design/icons-svg/lib/asn/BankOutlined';

export interface BankOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const BankOutlined: BankOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={BankOutlinedSvg} />
    ;

BankOutlined.displayName = 'BankOutlined';

export default FunctionalComponent;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TransactionOutlinedSvg from '@ant-design/icons-svg/lib/asn/TransactionOutlined';

export interface TransactionOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TransactionOutlined: TransactionOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TransactionOutlinedSvg} />
    ;

TransactionOutlined.displayName = 'TransactionOutlined';

export default FunctionalComponent;
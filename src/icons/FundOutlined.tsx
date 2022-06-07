// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FundOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundOutlined';

export interface FundOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FundOutlined: FundOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FundOutlinedSvg} />
    ;

FundOutlined.displayName = 'FundOutlined';

export default FunctionalComponent;
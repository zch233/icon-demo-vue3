// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TrademarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrademarkOutlined';

export interface TrademarkOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TrademarkOutlined: TrademarkOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TrademarkOutlinedSvg} />
    ;

TrademarkOutlined.displayName = 'TrademarkOutlined';

export default FunctionalComponent;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import TrademarkCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleOutlined';

export interface TrademarkCircleOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const TrademarkCircleOutlined: TrademarkCircleOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={TrademarkCircleOutlinedSvg} />
    ;

TrademarkCircleOutlined.displayName = 'TrademarkCircleOutlined';

export default FunctionalComponent;
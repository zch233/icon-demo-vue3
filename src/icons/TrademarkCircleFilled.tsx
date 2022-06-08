// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TrademarkCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleFilled';

export interface TrademarkCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TrademarkCircleFilled: TrademarkCircleFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={TrademarkCircleFilledSvg} />;

TrademarkCircleFilled.displayName = 'TrademarkCircleFilled';

export default FunctionalComponent;
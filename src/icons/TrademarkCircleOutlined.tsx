// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TrademarkCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleOutlined';

export interface TrademarkCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TrademarkCircleOutlined: TrademarkCircleOutlinedIconType = (props, context) => <Icon name='TrademarkCircleOutlined' {...{ ...props, ...context.attrs }} icon={TrademarkCircleOutlinedSvg} />;

TrademarkCircleOutlined.displayName = 'TrademarkCircleOutlined';

export default TrademarkCircleOutlined;
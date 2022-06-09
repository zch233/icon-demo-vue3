// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TrademarkCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/TrademarkCircleOutlined';

export interface TrademarkCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTrademarkCircleOutlined: TrademarkCircleOutlinedIconType = (props, context) => (
    <Icon name='TrademarkCircleOutlined' {...{ ...props, ...context.attrs }} icon={TrademarkCircleOutlinedSvg} />
);

IconTrademarkCircleOutlined.displayName = 'IconTrademarkCircleOutlined';

export default IconTrademarkCircleOutlined;
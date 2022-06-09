// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TrademarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrademarkOutlined';

export interface TrademarkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TrademarkOutlined: TrademarkOutlinedIconType = (props, context) => <Icon name='TrademarkOutlined' {...{ ...props, ...context.attrs }} icon={TrademarkOutlinedSvg} />;

TrademarkOutlined.displayName = 'TrademarkOutlined';

export default TrademarkOutlined;
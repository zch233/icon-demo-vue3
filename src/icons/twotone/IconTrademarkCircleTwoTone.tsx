// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TrademarkCircleTwoToneSvg from 'icon-base/es/asn/TrademarkCircleTwoTone';

export interface TrademarkCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTrademarkCircleTwoTone: TrademarkCircleTwoToneIconType = (props, context) => (
    <Icon name='TrademarkCircleTwoTone' {...{ ...props, ...context.attrs }} icon={TrademarkCircleTwoToneSvg} />
);

IconTrademarkCircleTwoTone.displayName = 'IconTrademarkCircleTwoTone';
IconTrademarkCircleTwoTone.theme = 'twotone';
IconTrademarkCircleTwoTone.originName = 'trademark-circle';

export default IconTrademarkCircleTwoTone;

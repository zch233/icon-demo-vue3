// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import TrademarkCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleTwoTone';

export interface TrademarkCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const TrademarkCircleTwoTone: TrademarkCircleTwoToneIconType = (props, context) => <Icon name='TrademarkCircleTwoTone' {...{ ...props, ...context.attrs }} icon={TrademarkCircleTwoToneSvg} />;

TrademarkCircleTwoTone.displayName = 'TrademarkCircleTwoTone';

export default TrademarkCircleTwoTone;
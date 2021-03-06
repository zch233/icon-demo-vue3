// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FunnelPlotTwoToneSvg from 'icon-base/es/asn/FunnelPlotTwoTone';

export interface FunnelPlotTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFunnelPlotTwoTone: FunnelPlotTwoToneIconType = (props, context) => (
    <Icon name='FunnelPlotTwoTone' {...{ ...props, ...context.attrs }} icon={FunnelPlotTwoToneSvg} />
);

IconFunnelPlotTwoTone.displayName = 'IconFunnelPlotTwoTone';
IconFunnelPlotTwoTone.theme = 'twotone';
IconFunnelPlotTwoTone.originName = 'funnel-plot';

export default IconFunnelPlotTwoTone;

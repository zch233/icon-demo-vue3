// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FunnelPlotTwoToneSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotTwoTone';

export interface FunnelPlotTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FunnelPlotTwoTone: FunnelPlotTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FunnelPlotTwoToneSvg} />
    ;

FunnelPlotTwoTone.displayName = 'FunnelPlotTwoTone';

export default FunctionalComponent;
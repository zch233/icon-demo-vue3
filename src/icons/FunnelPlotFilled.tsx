// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FunnelPlotFilledSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotFilled';

export interface FunnelPlotFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FunnelPlotFilled: FunnelPlotFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FunnelPlotFilledSvg} />
    ;

FunnelPlotFilled.displayName = 'FunnelPlotFilled';

export default FunctionalComponent;
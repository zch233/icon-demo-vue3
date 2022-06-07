// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FunnelPlotOutlinedSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotOutlined';

export interface FunnelPlotOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FunnelPlotOutlined: FunnelPlotOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FunnelPlotOutlinedSvg} />
    ;

FunnelPlotOutlined.displayName = 'FunnelPlotOutlined';

export default FunctionalComponent;
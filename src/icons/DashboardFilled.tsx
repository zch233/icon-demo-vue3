// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import DashboardFilledSvg from '@ant-design/icons-svg/lib/asn/DashboardFilled';

export interface DashboardFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DashboardFilled: DashboardFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={DashboardFilledSvg} />
    ;

DashboardFilled.displayName = 'DashboardFilled';

export default FunctionalComponent;
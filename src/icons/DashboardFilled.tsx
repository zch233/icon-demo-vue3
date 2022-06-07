// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import DashboardFilledSvg from '@ant-design/icons-svg/lib/asn/DashboardFilled';

export interface DashboardFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const DashboardFilled: DashboardFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={DashboardFilledSvg} />
    ;

DashboardFilled.displayName = 'DashboardFilled';

export default DashboardFilled;
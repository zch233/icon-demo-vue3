// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DashboardOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashboardOutlined';

export interface DashboardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DashboardOutlined: DashboardOutlinedIconType = (props, context) => <Icon name='DashboardOutlined' {...{ ...props, ...context.attrs }} icon={DashboardOutlinedSvg} />;

DashboardOutlined.displayName = 'DashboardOutlined';

export default DashboardOutlined;
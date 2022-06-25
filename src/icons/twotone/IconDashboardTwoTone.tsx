// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DashboardTwoToneSvg from 'icon-base/es/asn/DashboardTwoTone';

export interface DashboardTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDashboardTwoTone: DashboardTwoToneIconType = (props, context) => (
    <Icon name='DashboardTwoTone' {...{ ...props, ...context.attrs }} icon={DashboardTwoToneSvg} />
);

IconDashboardTwoTone.displayName = 'IconDashboardTwoTone';
IconDashboardTwoTone.theme = 'twotone';
IconDashboardTwoTone.originName = 'dashboard';

export default IconDashboardTwoTone;

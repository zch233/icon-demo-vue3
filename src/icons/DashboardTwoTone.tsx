// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DashboardTwoToneSvg from '@ant-design/icons-svg/lib/asn/DashboardTwoTone';

export interface DashboardTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DashboardTwoTone: DashboardTwoToneIconType = (props, context) => <Icon name='DashboardTwoTone' {...{ ...props, ...context.attrs }} icon={DashboardTwoToneSvg} />;

DashboardTwoTone.displayName = 'DashboardTwoTone';

export default DashboardTwoTone;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DashOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashOutlined';

export interface DashOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DashOutlined: DashOutlinedIconType = (props, context) => <Icon name='DashOutlined' {...{ ...props, ...context.attrs }} icon={DashOutlinedSvg} />;

DashOutlined.displayName = 'DashOutlined';

export default DashOutlined;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DesktopOutlinedSvg from '@ant-design/icons-svg/lib/asn/DesktopOutlined';

export interface DesktopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DesktopOutlined: DesktopOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DesktopOutlinedSvg} />;

DesktopOutlined.displayName = 'DesktopOutlined';

export default FunctionalComponent;
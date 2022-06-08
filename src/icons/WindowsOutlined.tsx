// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import WindowsOutlinedSvg from '@ant-design/icons-svg/lib/asn/WindowsOutlined';

export interface WindowsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const WindowsOutlined: WindowsOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={WindowsOutlinedSvg} />;

WindowsOutlined.displayName = 'WindowsOutlined';

export default WindowsOutlined;
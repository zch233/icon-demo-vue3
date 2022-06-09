// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ChromeOutlinedSvg from '@ant-design/icons-svg/lib/asn/ChromeOutlined';

export interface ChromeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ChromeOutlined: ChromeOutlinedIconType = (props, context) => <Icon name='ChromeOutlined' {...{ ...props, ...context.attrs }} icon={ChromeOutlinedSvg} />;

ChromeOutlined.displayName = 'ChromeOutlined';

export default ChromeOutlined;
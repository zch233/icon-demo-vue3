// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import WifiOutlinedSvg from '@ant-design/icons-svg/lib/asn/WifiOutlined';

export interface WifiOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const WifiOutlined: WifiOutlinedIconType = (props, context) => <Icon name='WifiOutlined' {...{ ...props, ...context.attrs }} icon={WifiOutlinedSvg} />;

WifiOutlined.displayName = 'WifiOutlined';

export default WifiOutlined;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import GoogleOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoogleOutlined';

export interface GoogleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const GoogleOutlined: GoogleOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={GoogleOutlinedSvg} />;

GoogleOutlined.displayName = 'GoogleOutlined';

export default GoogleOutlined;
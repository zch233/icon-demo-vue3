// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SecurityScanOutlinedSvg from '@ant-design/icons-svg/lib/asn/SecurityScanOutlined';

export interface SecurityScanOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SecurityScanOutlined: SecurityScanOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SecurityScanOutlinedSvg} />;

SecurityScanOutlined.displayName = 'SecurityScanOutlined';

export default FunctionalComponent;
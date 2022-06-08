// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SecurityScanTwoToneSvg from '@ant-design/icons-svg/lib/asn/SecurityScanTwoTone';

export interface SecurityScanTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SecurityScanTwoTone: SecurityScanTwoToneIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={SecurityScanTwoToneSvg} />;

SecurityScanTwoTone.displayName = 'SecurityScanTwoTone';

export default FunctionalComponent;
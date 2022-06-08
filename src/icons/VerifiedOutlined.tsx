// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import VerifiedOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerifiedOutlined';

export interface VerifiedOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const VerifiedOutlined: VerifiedOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={VerifiedOutlinedSvg} />;

VerifiedOutlined.displayName = 'VerifiedOutlined';

export default VerifiedOutlined;
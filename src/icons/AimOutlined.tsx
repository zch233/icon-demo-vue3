// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AimOutlinedSvg from '@ant-design/icons-svg/lib/asn/AimOutlined';

export interface AimOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AimOutlined: AimOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={AimOutlinedSvg} />;

AimOutlined.displayName = 'AimOutlined';

export default AimOutlined;
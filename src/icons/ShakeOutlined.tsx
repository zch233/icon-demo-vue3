// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ShakeOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShakeOutlined';

export interface ShakeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ShakeOutlined: ShakeOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ShakeOutlinedSvg} />;

ShakeOutlined.displayName = 'ShakeOutlined';

export default ShakeOutlined;
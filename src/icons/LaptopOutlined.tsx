// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import LaptopOutlinedSvg from '@ant-design/icons-svg/lib/asn/LaptopOutlined';

export interface LaptopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const LaptopOutlined: LaptopOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={LaptopOutlinedSvg} />;

LaptopOutlined.displayName = 'LaptopOutlined';

export default LaptopOutlined;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ShrinkOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShrinkOutlined';

export interface ShrinkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ShrinkOutlined: ShrinkOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ShrinkOutlinedSvg} />;

ShrinkOutlined.displayName = 'ShrinkOutlined';

export default ShrinkOutlined;
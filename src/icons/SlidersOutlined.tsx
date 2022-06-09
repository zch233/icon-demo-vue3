// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import SlidersOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlidersOutlined';

export interface SlidersOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const SlidersOutlined: SlidersOutlinedIconType = (props, context) => <Icon name='SlidersOutlined' {...{ ...props, ...context.attrs }} icon={SlidersOutlinedSvg} />;

SlidersOutlined.displayName = 'SlidersOutlined';

export default SlidersOutlined;
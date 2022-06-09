// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import LayoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LayoutOutlined';

export interface LayoutOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const LayoutOutlined: LayoutOutlinedIconType = (props, context) => <Icon name='LayoutOutlined' {...{ ...props, ...context.attrs }} icon={LayoutOutlinedSvg} />;

LayoutOutlined.displayName = 'LayoutOutlined';

export default LayoutOutlined;
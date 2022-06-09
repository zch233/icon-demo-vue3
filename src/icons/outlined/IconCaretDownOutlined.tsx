// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CaretDownOutlinedSvg from '@ant-design/icons-svg/es/asn/CaretDownOutlined';

export interface CaretDownOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCaretDownOutlined: CaretDownOutlinedIconType = (props, context) => (
    <Icon name='CaretDownOutlined' {...{ ...props, ...context.attrs }} icon={CaretDownOutlinedSvg} />
);

IconCaretDownOutlined.displayName = 'IconCaretDownOutlined';

export default IconCaretDownOutlined;
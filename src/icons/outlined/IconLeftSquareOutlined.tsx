// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LeftSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/LeftSquareOutlined';

export interface LeftSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLeftSquareOutlined: LeftSquareOutlinedIconType = (props, context) => (
    <Icon name='LeftSquareOutlined' {...{ ...props, ...context.attrs }} icon={LeftSquareOutlinedSvg} />
);

IconLeftSquareOutlined.displayName = 'IconLeftSquareOutlined';

export default IconLeftSquareOutlined;
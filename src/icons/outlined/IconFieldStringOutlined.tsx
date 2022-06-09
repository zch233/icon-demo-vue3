// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FieldStringOutlinedSvg from '@ant-design/icons-svg/es/asn/FieldStringOutlined';

export interface FieldStringOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFieldStringOutlined: FieldStringOutlinedIconType = (props, context) => (
    <Icon name='FieldStringOutlined' {...{ ...props, ...context.attrs }} icon={FieldStringOutlinedSvg} />
);

IconFieldStringOutlined.displayName = 'IconFieldStringOutlined';

export default IconFieldStringOutlined;
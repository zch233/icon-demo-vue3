// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FieldStringOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldStringOutlined';

export interface FieldStringOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FieldStringOutlined: FieldStringOutlinedIconType = (props, context) => <Icon name='FieldStringOutlined' {...{ ...props, ...context.attrs }} icon={FieldStringOutlinedSvg} />;

FieldStringOutlined.displayName = 'FieldStringOutlined';

export default FieldStringOutlined;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FieldNumberOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldNumberOutlined';

export interface FieldNumberOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FieldNumberOutlined: FieldNumberOutlinedIconType = (props, context) => <Icon name='FieldNumberOutlined' {...{ ...props, ...context.attrs }} icon={FieldNumberOutlinedSvg} />;

FieldNumberOutlined.displayName = 'FieldNumberOutlined';

export default FieldNumberOutlined;
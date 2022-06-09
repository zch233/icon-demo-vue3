// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FieldTimeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldTimeOutlined';

export interface FieldTimeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FieldTimeOutlined: FieldTimeOutlinedIconType = (props, context) => <Icon name='FieldTimeOutlined' {...{ ...props, ...context.attrs }} icon={FieldTimeOutlinedSvg} />;

FieldTimeOutlined.displayName = 'FieldTimeOutlined';

export default FieldTimeOutlined;
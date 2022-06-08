// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CheckOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckOutlined';

export interface CheckOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CheckOutlined: CheckOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CheckOutlinedSvg} />;

CheckOutlined.displayName = 'CheckOutlined';

export default CheckOutlined;
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FundProjectionScreenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundProjectionScreenOutlined';

export interface FundProjectionScreenOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FundProjectionScreenOutlined: FundProjectionScreenOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FundProjectionScreenOutlinedSvg} />;

FundProjectionScreenOutlined.displayName = 'FundProjectionScreenOutlined';

export default FundProjectionScreenOutlined;
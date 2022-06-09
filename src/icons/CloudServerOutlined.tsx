// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CloudServerOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudServerOutlined';

export interface CloudServerOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CloudServerOutlined: CloudServerOutlinedIconType = (props, context) => <Icon name='CloudServerOutlined' {...{ ...props, ...context.attrs }} icon={CloudServerOutlinedSvg} />;

CloudServerOutlined.displayName = 'CloudServerOutlined';

export default CloudServerOutlined;
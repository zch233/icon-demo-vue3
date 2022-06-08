// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CloudOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudOutlined';

export interface CloudOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CloudOutlined: CloudOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CloudOutlinedSvg} />;

CloudOutlined.displayName = 'CloudOutlined';

export default FunctionalComponent;
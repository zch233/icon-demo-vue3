// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AntCloudOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntCloudOutlined';

export interface AntCloudOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AntCloudOutlined: AntCloudOutlinedIconType = (props, context) => <Icon name='AntCloudOutlined' {...{ ...props, ...context.attrs }} icon={AntCloudOutlinedSvg} />;

AntCloudOutlined.displayName = 'AntCloudOutlined';

export default AntCloudOutlined;
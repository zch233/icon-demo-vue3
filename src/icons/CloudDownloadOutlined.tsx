// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CloudDownloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudDownloadOutlined';

export interface CloudDownloadOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CloudDownloadOutlined: CloudDownloadOutlinedIconType = (props, context) => <Icon name='CloudDownloadOutlined' {...{ ...props, ...context.attrs }} icon={CloudDownloadOutlinedSvg} />;

CloudDownloadOutlined.displayName = 'CloudDownloadOutlined';

export default CloudDownloadOutlined;
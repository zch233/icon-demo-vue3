// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CloudDownloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudDownloadOutlined';

export interface CloudDownloadOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CloudDownloadOutlined: CloudDownloadOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CloudDownloadOutlinedSvg} />
    ;

CloudDownloadOutlined.displayName = 'CloudDownloadOutlined';

export default FunctionalComponent;
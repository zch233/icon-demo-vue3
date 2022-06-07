// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import CloudUploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudUploadOutlined';

export interface CloudUploadOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CloudUploadOutlined: CloudUploadOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={CloudUploadOutlinedSvg} />
    ;

CloudUploadOutlined.displayName = 'CloudUploadOutlined';

export default CloudUploadOutlined;
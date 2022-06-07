// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import CloudFilledSvg from '@ant-design/icons-svg/lib/asn/CloudFilled';

export interface CloudFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CloudFilled: CloudFilledIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={CloudFilledSvg} />
    ;

CloudFilled.displayName = 'CloudFilled';

export default CloudFilled;